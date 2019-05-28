
resource "aws_lambda_function" "augment-transaction" {
  function_name = "augment-transaction"
  filename      = "augmentLambda.zip"

  role    = "${aws_iam_role.lambda-exec.arn}"
  handler = "index.handler"

  runtime = "nodejs8.10"
}

resource "aws_lambda_permission" "apigw" {
  statement_id  = "AllowAPIGatewayInvoke"
  action        = "lambda:InvokeFunction"
  function_name = "${aws_lambda_function.augment-transaction.arn}"
  principal     = "apigateway.amazonaws.com"

  source_arn = "${aws_api_gateway_deployment.augment-transaction.execution_arn}/*/*"
}
