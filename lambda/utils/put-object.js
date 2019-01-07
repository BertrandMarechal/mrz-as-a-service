'use strict';
const AWS = require('aws-sdk');
const fs = require('fs');
const path = require('path');

AWS.config.credentials = new AWS.SharedIniFileCredentials({profile: 'me'});
const awsConfig = {
    region: "eu-west-1",
    endpoint: "https://s3.eu-west-1.amazonaws.com"
};
AWS.config.update(awsConfig);

async function main() {
    const s3 = new AWS.S3();
    const file = await new Promise((resolve, reject) => {
        fs.readFile(path.resolve(__dirname, '../../data/hello.png'), (error, data) => {
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
    await  s3.putObject({
        Bucket: 'mrz-a-a-s',
        key: 'input/passport',
        Body: file,
    });

    console.log('Done');
}

main();

