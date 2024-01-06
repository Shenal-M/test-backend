const dynamodbClient = require('./config/aws');
const { DynamoDBClient, GetItemCommand } = require('@aws-sdk/client-dynamodb');
const { get } = require('./routes/users');

// function to get the item from the table in DynamoDB with the given key
const getItem = async (key) => {
    const params = {
        TableName: 'test-dynamodb-table',
        Key: {
            'id': { S: key }
        }
    };
    const command = new GetItemCommand(params);
    const response = await dynamodbClient.send(command);
    console.log(response.Item.phone.N);
    return response.Item.phone.N;
};

myitem = getItem('001');
console.log(myitem);