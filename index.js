// const AWS - require('aws-sdk')

// AWS.config.update({
//   region: "eu-west-1"
// })

"use strict"

// Your function handler
exports.handler = function(event, context, callback) {
  const message = {
    message: "Hello World",
    event
  }
  // callback will send message object back
  callback(null, message)
}
// // {
// //   "type": "transaction.created",
// //   "data": {
// //       "account_id": "acc_00008gju41AHyfLUzBUk8A",
// //       "amount": -350,
// //       "created": "2015-09-04T14:28:40Z",
// //       "currency": "GBP",
// //       "description": "Ozone Coffee Roasters",
// //   }
// // }

// const docClient = new AWS.DynamoDb.DocumentClient()

// exports.handler = function(event, context, callback) {
//   console.log(event)

//   let parameters = {
//     TableName: 'CompanyEnvironmentalData',
//     KeyConditionExpression: "name = :company",
//     ExpressionAttributeValues: {
//       ":company": "Homebase"//HELLO
//     }
//   }

//   docClient.query(params, function(err, data) {
//     if (err) {
//       console.error("Unable to qyery. Error: ", JSON.stringify(err, null, 2))
//     } else {
//       console.log("Yay")
//       data.Items.forEach(function(item) {
//         console.log(item.name)
//       })
//     }
//   })
// }
