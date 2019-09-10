import AWS from 'aws-sdk';
import fs  from 'fs';
import path  from 'path';
import { PutObjectOutput } from 'aws-sdk/clients/s3';

AWS.config.credentials = new AWS.SharedIniFileCredentials({profile: 'patates'});
const awsConfig = {
    region: "eu-west-1",
    endpoint: "https://s3.eu-west-1.amazonaws.com"
};
AWS.config.update(awsConfig);

async function main() {
    const s3 = new AWS.S3();
    const file: Buffer = <Buffer> await new Promise((resolve, reject) => {
        fs.readFile(path.resolve(__dirname, '../../data/uk3.png'), (error, data) => {
            if (error) {
                reject(error);
            } else {
                resolve(data);
            }
        })
    });
    if (!file) {
        throw 'Wrong file path';
    }
    var base64data = new Buffer(<Buffer>file);
    const output: PutObjectOutput = await s3.putObject({
        Bucket: 'mrz-read-as-a-service',
        Key: 'input/passport',
        Body: base64data,
    }).promise();

    if (!output) {
        throw 'Error when puting the object';
    }
    console.log('Done');
}

main();