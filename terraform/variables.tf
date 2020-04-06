
variable "environment" {
    type = string
    default = "test"
}

variable "key_pair_id" {
    type = string
    default = "hackathon-2020"
}

variable "api_server_ami" {
    type = string
    default = "ami-097f4caabfa00903c"
    # Cloud9Ubuntu-2020-04-03T16-48 AWS owned image
}