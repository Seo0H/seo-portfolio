'use strict';

import chromium from '@sparticuz/chromium';
import AWS, { type S3 as TS3 } from 'aws-sdk';
import PDFMerger from 'pdf-merger-js';
import puppeteer, { type Browser } from 'puppeteer-core';

import type { Handler } from 'aws-lambda';

const bucketName = process.env.BUCKET_NAME ?? '';

const handler: Handler = async () => {
  const merger = new PDFMerger();
  // TODO: 마이그래이션 @aws-sdk/client-s3
  const S3 = new AWS.S3({
    signatureVersion: 'v4',
  });

  console.log(`✅ Start make PDF lambda function`);

  let browser: Browser | null = null;
  let page: puppeteer.Page | null = null;
  let result: ReturnType<typeof S3.putObject> | null = null;

  try {
    // launch the browser
    browser = await puppeteer.launch({
      args: [
        '--disable-features=site-per-process',
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage',
        '--single-process',
        '--font-render-hinting=none',
      ],
      defaultViewport: chromium.defaultViewport,
      executablePath: process.env.AWS_EXECUTION_ENV
        ? await chromium.executablePath('/var/task/node_modules/@sparticuz/chromium/bin')
        : '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
      headless: !!chromium.headless,
    });

    page = await browser.newPage();
    await page.setUserAgent(
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36',
    );

    console.log(`✅ Make page success`);

    // NOTE: PDF 순서대로 idx 정렬되어야 함
    const projectPaths = ['portfolio', 'blog', 'sobisa'].map((el) => `project/${el}`);
    const paths = ['info', ...projectPaths];

    console.log(`🚗 PATHS : ${paths}`);

    for (const path of paths) {
      await page?.goto(`https://portfolio.seo0h.me/${path}`, {
        waitUntil: 'networkidle0',
      });

      await page.waitForSelector('h1', {
        visible: true,
      });

      await page.waitForFunction('document.fonts.ready');

      await merger.add(
        await page?.pdf({
          format: 'a4',
          printBackground: true,
        }),
      );
    }

    await merger.setMetadata({
      producer: 'react, AWS Lambda, serverless, puppeteer ',
      author: 'seo0h',
      creator: 'seo0h',
      title: 'seo0h portfolio',
    });

    // upload the screenshot in s3
    const bucketParams: TS3.Types.PutObjectRequest = {
      Body: await merger.saveAsBuffer(),
      Bucket: bucketName,
      ContentType: 'application/pdf',
      CacheControl: 'max-age=31536000',
      Key: `seo-portfolio.pdf`, // TODO: 이전 버전 저장되도록 수정
      StorageClass: 'STANDARD',
    };

    console.log(`✅ All pdf merge success`);

    result = await S3.putObject(bucketParams)
      .promise()
      .then((data) => {
        console.log('✅ Successfully PUT object');
        console.log(data);
        return {
          screenshotUrl: `https://${bucketName}.s3.amazonaws.com/${bucketParams.Key}`,
          ...data,
        };
      })
      .catch((error) => {
        console.log('⚠️ Failed to PUT object');
        console.log(error);
        return error;
      });
  } catch (error) {
    console.log(`⚠️ something wrong...`);
    console.log(error);
    return error;
  } finally {
    if (browser !== null) await browser.close();
    if (page !== null) await page;
  }
  return { message: 'Finish Lambda Function.' };
};

export { handler };
