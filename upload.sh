#!/usr/bin/env bash

rm -r augmentLambda.zip

# Could also tranpile Ts here...
zip -r augmentLambda.zip index.js

aws s3 cp augmentLambda.zip s3://augment-transaction-bucket/augmentLambda.zip
