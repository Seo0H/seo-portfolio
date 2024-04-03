## Lambda Function - make & save pdf

### 개요

- 포트폴리오 페이지를 PDF로 생성 및 저장하는 코드

## 사용 기술

- **런타임 : AWS Lambda, S3, Puppeteer** <br/>
  AWS Lambda가 제공하는 서버리스 환경에서 Puppeteer 를 이용한 PDF 생성. 생성된 PDF는 S3 에 저장

- **배포 : Serverless Framework**<br/>
  AWS Lambda에서 실행되는 코드는 [Serverless Framework](https://github.com/serverless/serverless?tab=readme-ov-file)를 이용해 배포

#### 로컬 테스트

```
sls invoke local -f handler
```

#### 배포

```
sls deploy --verbose
```

#### lambda 테스트

```
sls invoke -f handler
```
