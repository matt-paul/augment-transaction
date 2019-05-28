#!/usr/bin/env bash

rm -r augmentLambda.zip

# Could also tranpile Ts here...
zip -r augmentLambda.zip index.js

# aws s3 cp augmentLambda.zip s3://augment-transaction-bucket/augmentLambda.zip

aws lambda update-function-code --function-name augment-transaction --zip-file fileb://augmentLambda.zip
