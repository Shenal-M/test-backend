// config/aws.js
const { DynamoDB } = require('@aws-sdk/client-dynamodb');

// Hardcoded AWS credentials (for local development only)
const credentials = ({
  accessKeyId: test,
  secretAccessKey: test,
});

const dynamodb = new DynamoDB({
  region: 'ap-south-1', // e.g., us-east-1
  credentials,
});

module.exports = dynamodb;
