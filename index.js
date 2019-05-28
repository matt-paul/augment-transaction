// exports.handler = async event => {
//   return {
//     statusCode: "200",
//     body: JSON.stringify({ message: "hello world" }),
//     headers: {
//       "Content-Type": "application/json"
//     }
//   }
// }

 {
   "type": "transaction.created",
   "data": {
       "account_id": "acc_00008gju41AHyfLUzBUk8A",
       "amount": -350,
       "created": "2015-09-04T14:28:40Z",
       "currency": "GBP",
       "description": "Ozone Coffee Roasters",
   }
}

var AWS = require("aws-sdk")

const docClient = new AWS.DynamoDb.DocumentClient()

exports.handler = function(event, context, callback) {
  console.log(event)

  let parameters = {
    TableName: "CompanyEnvironmentalData",
    KeyConditionExpression: "name = :company",
    ExpressionAttributeValues: {
      ":company": "Homebase" //HELLO
    }
  }

  docClient.query(params, function(err, data) {
    if (err) {
      console.error("Unable to qyery. Error: ", JSON.stringify(err, null, 2))
    } else {
      console.log("Yay")
      data.Items.forEach(function(item) {
        console.log(item.name)
      })
    }
  })
}
