resource "aws_dynamodb_table" "company-environmental-data" {
  name           = "company-environmental-data"
  read_capacity  = 5
  write_capacity = 5
  hash_key       = "Company"
  range_key      = "Certificate"

  attribute {
    name = "Company"
    type = "S"
  }

  attribute {
    name = "Certificate"
    type = "N"
  }

}
