![](infrastructure/augment-trans-1.png)

We need to create the bucket first before running Terraform, due to the lambda needing to be in the bucket
`aws s3api create-bucket --bucket augment-transaction-bucket --region eu-west-1 --create-bucket-configuration LocationConstraint=eu-west-1`
To test the lambda from the cli, invoke with.....
`aws lambda invoke --region=eu-west-1 --function-name=augmentation-transaction`
