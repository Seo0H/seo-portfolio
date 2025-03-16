import type { ComponentProps } from 'react';

// import { GetObjectCommand, S3Client } from '@aws-sdk/client-s3';
// import { fromCognitoIdentityPool } from '@aws-sdk/credential-providers';

import { Icon } from '@/asset';
import { callAll } from '@/utils/call-all-handlers';
import { cn } from '@/utils/cn';
import { saveFile } from '@/utils/save-file';

// 2025.03.16 AWS 관련 코드 제거
// const fileName = 'seo-portfolio.pdf';
// const region = import.meta.env.VITE_AWS_REGIN;
// const identityPoolId = import.meta.env.VITE_AWS_IDENTITY_POOL_ID;
// const Bucket = import.meta.env.VITE_AWS_BUCKET_NAME;

// const client = new S3Client({
//   region,
//   credentials: fromCognitoIdentityPool({
//     clientConfig: { region },
//     identityPoolId,
//   }),
// });

/**
 * @description 만댝 onClick 핸들러가 인자로 넘어올 경우, 파일 다운로드 전에 실행됨
 */
export const DownloadPdf = ({ className, onClick, ...props }: ComponentProps<'button'>) => {
  const handleDownload = async () => {
    const fileUrl = '/seo-portfolio.pdf';
    const fileName = 'seo-portfolio.pdf';

    try {
      const res = await fetch(fileUrl);
      if (!res.ok) throw new Error(`Download failed: ${res.statusText}`);

      const blob = await res.blob();
      saveFile(blob, fileName);
    } catch (err) {
      console.error('PDF 다운로드 실패:', err); // TODO: Error UI 처리
    }
  };

  return (
    <button className={cn(className)} onClick={callAll(onClick, handleDownload)} {...props}>
      <Icon.Download />
    </button>
  );
};
