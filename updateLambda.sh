#!/usr/bin/env bash
rm -r dist
rm infrastructure/augmentLambda.zip

# Run typescipt compiler
tsc

# Create zip file
cd dist && zip -r ../infrastructure/augmentLambda.zip . ../node_modules

aws lambda update-function-code --function-name augment-transaction --zip-file fileb://../infrastructure/augmentLambda.zip
