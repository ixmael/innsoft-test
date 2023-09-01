resource "docker_network" "inssoft" {
  name   = "${local.project_name}-network-${var.environment}"
  driver = "bridge"
}
