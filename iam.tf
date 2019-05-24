
# Roles
resource "aws_iam_role" "lambda-exec" {
  name = "augment-transaction-lambda-role"

  assume_role_policy = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Action": "sts:AssumeRole",
      "Principal": {
        "Service": "lambda.amazonaws.com"
      },
      "Effect": "Allow",
      "Sid": ""
    }
  ]
}
EOF
}

# POLICIES
resource "aws_iam_role_policy" "dynamodb-lambda-policy" {
  name = "dynamodb-lambda-policy"
  role = aws_iam_role.lambda-exec.id
  policy = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "dynamodb:*"
      ],
      "Resource": "${aws_dynamodb_table.company-environmental-data.arn}"
    }
  ]
}
EOF
}


output "base_url" {
  value = "${aws_api_gateway_deployment.augment-transaction.invoke_url}"
}
