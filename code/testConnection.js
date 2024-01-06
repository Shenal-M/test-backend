// server/testConnection.js
const dynamodb = require('./config/aws');

// Function to check DynamoDB connection by listing tables
async function checkDynamoDBConnection() {
  try {
    const tables = await dynamodb.listTables({});
    console.log('DynamoDB connection is successful. Tables:', tables.TableNames);
  } catch (err) {
    console.error('Error checking DynamoDB connection:', err);
  }
}

// Call the function to check the connection
checkDynamoDBConnection();

