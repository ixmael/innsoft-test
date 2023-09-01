resource "docker_container" "api" {
  name     = "${local.project_name}-api-${var.environment}"
  image    = docker_image.api.name
  hostname = "api.inssoft"

  attach   = false
  must_run = true
  logs     = true
  restart  = "unless-stopped"

  /*
  // Optional if you use the repository described by this configuration
  depends_on = [
    docker_container.repository
  ]
  */

  env = [
    "ENVIRONMENT=${var.environment}",
  ]

  ports {
    external = 9000
    internal = 3000
  }

  networks_advanced {
    name = docker_network.inssoft.name
    aliases = [
      "api"
    ]
  }
}

resource "docker_image" "api" {
  name = "${local.project_name}/api"

  build {
    path       = abspath(path.cwd)
    dockerfile = "./infrastructure/docker/backend.Dockerfile"

    tag = [
      "${var.environment}"
    ]

    label = {
      author : "ixmael"
    }
  }
}
