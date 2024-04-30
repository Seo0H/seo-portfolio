import type { ComponentProps } from 'react';

import { GetObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { fromCognitoIdentityPool } from '@aws-sdk/credential-providers';

import { Icon } from '@/asset';
import { callAll } from '@/utils/call-all-handlers';
import { cn } from '@/utils/cn';
import { saveFile } from '@/utils/save-file';

const fileName = 'seo-portfolio.pdf';
const region = import.meta.env.VITE_AWS_REGIN;
const identityPoolId = import.meta.env.VITE_AWS_IDENTITY_POOL_ID;
const Bucket = import.meta.env.VITE_AWS_BUCKET_NAME;

const client = new S3Client({
  region,
  credentials: fromCognitoIdentityPool({
    clientConfig: { region },
    identityPoolId,
  }),
});

/**
 * @description 만댝 onClick 핸들러가 인자로 넘어올 경우, 파일 다운로드 전에 실행됨
 */
export const DownloadPdf = ({ className, onClick, ...props }: ComponentProps<'button'>) => {
  const handleDownload = async () => {
    // NOTE: DownloadPdf 외부에서 GetObjectCommand 객체를 생성 할 경우
    // s3 객체의 이전 버전 참조하기 때문에 함수 내부에서 생성
    const command = new GetObjectCommand({ Bucket, Key: fileName });

    try {
      const res = await client.send(command);
      const resBody = await res.Body?.transformToByteArray();

      if (!resBody) return;
      const blob = new Blob([resBody], { type: 'pdf' });

      saveFile(blob, fileName);
    } catch (err) {
      console.log(err); // TODO: Error handling 처리 추가
    }
  };

  return (
    <button className={cn(className)} onClick={callAll(onClick, handleDownload)} {...props}>
      <Icon.Download />
    </button>
  );
};
