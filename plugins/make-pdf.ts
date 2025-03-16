import fs from 'fs';
import path from 'path';

import chromium from '@sparticuz/chromium';
import PDFMerger from 'pdf-merger-js';
import puppeteer from 'puppeteer-core';
import { Plugin, preview } from 'vite';

export default function GeneratePdfPlugin(): Plugin {
  return {
    name: 'vite-plugin-generate-pdf',
    apply: 'build',

    async closeBundle() {
      console.log('📄 PDF 생성 시작...');

      // Vite preview 서버 띄우기
      const previewServer = await preview({
        preview: {
          port: 4173,
          open: false,
        },
        configFile: false,
      });

      previewServer.printUrls();

      const merger = new PDFMerger();
      const browser = await puppeteer.launch({
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

      console.log('🚀 browser 생성 완료');

      try {
        const page = await browser.newPage();
        await page.setUserAgent(
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36',
        );

        const projectPaths = ['portfolio', 'blog', 'sobisa'].map((el) => `project/${el}`);
        const paths = ['info', ...projectPaths];

        console.log(`🚗 PATHS : ${paths}`);

        for (const p of paths) {
          const url = `http://localhost:4173/${p}`;
          console.log(`📄 페이지 이동: ${url}`);

          try {
            await page.goto(url, { waitUntil: 'networkidle0' });
            await page.waitForSelector('h1', { visible: true });
            await page.waitForFunction('document.fonts.ready');

            const pdfBuffer = await page.pdf({ format: 'a4', printBackground: true });
            await merger.add(pdfBuffer);
            console.log(`✅ PDF 버퍼 추가 완료: ${p}`);
          } catch (err) {
            console.error(`❌ PDF 처리 실패: ${p}`, err);
            process.exit(1);
          }
        }

        await merger.setMetadata({
          producer: 'vite, puppeteer',
          author: 'seo0h',
          creator: 'seo0h',
          title: 'seo0h portfolio',
        });

        const outputDir = path.resolve(__dirname, '../dist');
        const outputPath = path.join(outputDir, 'seo-portfolio.pdf');
        fs.mkdirSync(outputDir, { recursive: true });

        await merger.save(outputPath);
        console.log(`✅ PDF 저장 완료: ${outputPath}`);
      } catch (err) {
        console.error('❌ 전체 PDF 생성 실패:', err);
        process.exit(1);
      } finally {
        await previewServer.close();
        console.log('🛑 Preview 서버 종료됨');
        process.exit(0);
      }
    },
  };
}
