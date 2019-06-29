## What does this app do?

I wrote a blog piece about it [here](https://blog.red-badger.com/how-can-open-banking-aid-ethical-purchase-decisions), check it out!

### Summary

When a transation occurs in the Monzo app, we receives a webhook from Monzo with the retailer info.
We then check if the retailer is in our (fictional) database of ethical company data.
If the retailer is in our fictional database and the rating is very poor, we create a feed item that we fire back into the Monzo app.
If the retailer is in our fictional database and the rating is excellent, we can also create the the feedback item to fire back.
To stop it becoming spammy, we probably don't want to do this for all transactions, simply the best and worst.



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
