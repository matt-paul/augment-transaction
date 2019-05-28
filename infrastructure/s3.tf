resource "aws_s3_bucket" "augment-transaction-code-bucket" {
  bucket = "${var.s3_bucket}"
  acl    = "private"
  versioning {
    enabled = true
  }
}
