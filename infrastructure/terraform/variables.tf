variable "environment" {
  type        = string
  description = "The environment"
  default     = "production"
}

variable "repository_root_password" {
  type        = string
  description = "The password for the root user"
}

variable "repository_data" {
  type = string
  description = "The data for the repository"
}
