# mrz-as-a-service
Use AWS Lambda function, S3 and rekognition to read and validate MRZ documents

## Create a serverless Lambda service

```bat
serverless create -t aws-nodejs -p lambda
```

## Create a bucket

```bat
aws s3api create-bucket --bucket mrz-read-as-a-service
```

## Utils

```bat
ts-node utils\put-object.ts
ts-node utils\run-rekognition.ts
ts-node utils\analyze-rekognition.ts
```
