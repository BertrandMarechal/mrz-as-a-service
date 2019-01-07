# mrz-as-a-service
Use AWS Lambda function, S3 and rekognition to read and validate MRZ documents

## Create a serverless Lambda service

```bat
serverless create -t aws-nodejs -p lambda
```

## Create a bucket

```bat
aws s3api create-bucket --bucket mrz-a-a-s --profile me
```

## Put an object

```bat
node lambda\utils\put-object.js
```
