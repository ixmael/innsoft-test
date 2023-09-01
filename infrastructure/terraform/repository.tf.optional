resource "docker_container" "repository" {
  name     = "${local.project_name}-repository-${var.environment}"
  image    = "postgres:15.4-alpine3.18"
  hostname = "repository.innsoft"

  attach   = false
  must_run = true
  logs     = true
  restart  = "unless-stopped"

  env = [
    "POSTGRES_PASSWORD=${var.repository_root_password}",
    "ENVIRONMENT=${var.environment}",
  ]

  ports {
    external = 5432
    internal = 5432
  }

  volumes {
    volume_name    = docker_volume.repository.name
    container_path = "/var/lib/postgresql/data"
  }

  networks_advanced {
    name = docker_network.innsoft.name
    aliases = [
      "repository"
    ]
  }
}
