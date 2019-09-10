import AWS from 'aws-sdk';
import fs from 'fs';
import path from 'path';

AWS.config.credentials = new AWS.SharedIniFileCredentials({profile: 'patates'});
const awsConfig = {
    region: "eu-west-1",
    endpoint: "https://rekognition.eu-west-1.amazonaws.com"
};
AWS.config.update(awsConfig);
const rekognition = new AWS.Rekognition();

var params = {
  Image: {
    S3Object: {
      Bucket: 'mrz-read-as-a-service',
      Name: 'input/passport',
    }
  }
};
rekognition.detectText(params, (err, data) => {
  if (err) console.log(err, err.stack); // an error occurred
  else     {
      fs.writeFileSync(path.resolve(__dirname, './data.json'), JSON.stringify(data, null, 2));
  }
});