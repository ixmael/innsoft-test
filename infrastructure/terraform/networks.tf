resource "docker_network" "innsoft" {
  name   = "${local.project_name}-network-${var.environment}"
  driver = "bridge"
}
