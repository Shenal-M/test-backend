// config/aws.js
const { DynamoDB } = require('@aws-sdk/client-dynamodb');

// Hardcoded AWS credentials (for local development only)
const credentials = ({
  accessKeyId: 'AKIATLP2N6KZMF2HXW7Y',
  secretAccessKey: '3dl7+zxwREKCDB06Cymug8painMIVZJoEXtPO5va',
});

const dynamodb = new DynamoDB({
  region: 'ap-south-1', // e.g., us-east-1
  credentials,
});

module.exports = dynamodb;