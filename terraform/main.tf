# Configure the AWS Provider
provider "aws" {
  version = "~> 2.0"
  region  = "us-west-1"
}

terraform {
  backend "s3" {
    bucket = "hackathon-2020-terraform-states"
    key    = "hackathon2020"
    region = "us-west-1"
  }
}

# Create a VPC
resource "aws_vpc" "default" {
  cidr_block = "10.0.0.0/16"
}

# Create a public subnet to launch our API server into
resource "aws_subnet" "public_subnet" {
  vpc_id                  = aws_vpc.default.id
  cidr_block              = "10.0.0.0/24"
}

resource "aws_subnet" "private_subnet" {
  vpc_id                  = aws_vpc.default.id
  cidr_block              = "10.0.1.0/24"
}

# Load Balancer (accessible from the internet)

resource "aws_security_group" "api_alb" {
  name        = "api-alb"
  description = "ALB security groups used to provide access to the API from the internet"
  vpc_id      = aws_vpc.default.id
}

resource "aws_security_group_rule" "api_alb_ingress" {
  type              = "ingress"
  from_port         = 80
  to_port           = 80
  protocol          = "tcp"
  cidr_blocks       = ["0.0.0.0/0"]
  security_group_id = aws_security_group.api_alb.id
}

resource "aws_security_group_rule" "api_alb_egress" {
  type              = "egress"
  from_port         = 80
  to_port           = 80
  protocol          = "tcp"
  source_security_group_id = aws_security_group.api_server.id
  security_group_id = aws_security_group.api_alb.id
}

resource "aws_lb" "api_alb" {
  name               = "api-alb"
  internal           = false
  load_balancer_type = "application"
  security_groups    = [aws_security_group.api_alb.id]
  subnets            = [aws_subnet.public_subnet.id]

  enable_deletion_protection = true

# TODO Add access logs later
#   access_logs {
#     bucket  = "${aws_s3_bucket.lb_logs.bucket}"
#     prefix  = "api_alb"
#     enabled = true
#   }

  tags = {
    Environment = var.environment
  }
}

resource "aws_lb_target_group" "api_alb" {
  name     = "api-alb"
  port     = 80
  protocol = "HTTP"
  vpc_id   = aws_vpc.default.id
}

# Server instance

resource "aws_security_group" "api_server" {
  name        = "api-server"
  description = "API Server security groups"
  vpc_id      = aws_vpc.default.id

  # SSH access from anywhere
  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  # HTTP access from the ALB
  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    security_groups = [aws_security_group.api_alb.id]
  }
}

resource "aws_instance" "web" {
  connection {
    user = "ubuntu"
    host = self.public_ip
  }

  instance_type = "t2.micro"
  ami = var.api_server_ami
  key_name = var.key_pair_id
  vpc_security_group_ids = [aws_security_group.api_server.id]
  subnet_id = aws_subnet.private_subnet.id
}

resource "aws_lb_target_group_attachment" "test" {
  target_group_arn = aws_lb_target_group.api_alb.arn
  target_id        = aws_instance.web.id
  port             = 80
}