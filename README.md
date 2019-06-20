- [] Setup remote state bucket
- [] AddFeedItem

What does this app do?

Receives a webhook from Monzo
Checks if the retailer is in our database of ethical company data.
// If the retailer is in our fictional database and the rating is poor, we create a feed item that we fire back into the Monzo app

For more information,

**Tech**
You will need to sign into the [developers portal](https://developers.monzo.com) with your registered Monzo account email to get the required access token.

![](infrastructure/augment-trans-1.png)

Run the Typscript compiler
`tsc`

Create the lambda Zip file for Terraform

<!-- `zip -r infrastructure/augmentLambda.zip dist/index.js` -->

`cd dist && zip -r ../infrastructure/augmentLambda.zip index.js`

To create the infrastructure...
`cd ../infrastructure && terraform apply`

Create a log group for monitoring the lambda in Cloudwatch
https://eu-west-1.console.aws.amazon.com/cloudwatch/home?region=eu-west-1#logs:
/aws/lambda/augment-transaction

If you make changes to the lambda, run the following from the root directory
`./updateLambda.sh`
