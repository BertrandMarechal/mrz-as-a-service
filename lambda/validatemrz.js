'use strict';
const AWS = require('aws-sdk');
AWS.config.credentials = new AWS.SharedIniFileCredentials({profile: 'me'});
const awsConfig = {
    region: "eu-west-1",
    endpoint: "https://rekognition.eu-west-1.amazonaws.com"
};
AWS.config.update(awsConfig);

module.exports.validatemrz = async (event, context) => {

};