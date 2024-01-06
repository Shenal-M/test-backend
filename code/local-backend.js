// local-backend.js
const express = require('express');
const { DynamoDBClient, ScanCommand } = require('@aws-sdk/client-dynamodb');
const dynamoDbClient = require('./config/aws');

const app = express();
const port = 3000;

app.get('/api/data', async (req, res) => {
  const params = {
    TableName: 'test-dynamodb-table',
  };

  try {
    const command = new ScanCommand(params);
    const { Items } = await dynamoDbClient.send(command);
    res.json(Items);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
