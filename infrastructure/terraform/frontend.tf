resource "docker_container" "frontend" {
  name     = "${local.project_name}-frontend-${var.environment}"
  image    = docker_image.frontend.name
  hostname = "frontend.innsoft"

  attach   = false
  must_run = true
  logs     = true
  restart  = "unless-stopped"

  depends_on = [
    docker_container.repository
  ]

  env = [
    "ENVIRONMENT=${var.environment}",
  ]

  ports {
    external = 3000
    internal = 3000
  }

  networks_advanced {
    name = docker_network.innsoft.name
    aliases = [
      "frontend"
    ]
  }
}

resource "docker_image" "frontend" {
  name = "${local.project_name}/frontend"

  build {
    path       = abspath(path.cwd)
    dockerfile = "./infrastructure/docker/frontend.Dockerfile"

    tag = [
      "${var.environment}"
    ]

    label = {
      author : "ixmael"
    }
  }
}
