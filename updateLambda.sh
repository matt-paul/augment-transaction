#!/usr/bin/env bash
tsc
cd dist
rm -r augmentLambda.zip

# Could also tranpile Ts here...
zip -r augmentLambda.zip index.js

aws lambda update-function-code --function-name augment-transaction --zip-file fileb://augmentLambda.zip
