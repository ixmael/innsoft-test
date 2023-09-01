# Innsoft fullstack test
This is the implementation required for the vacancy process.

You can visit the [live demo of this test](https://inssoft.irm.mx).

## Applications

### Backend
The backend is in the **packages/backend** path. You can read the [README.md](packages/backend/README.md) to know how to work or deploy it.

### Frontend
The frontend is in **packages/frontend** path. You can read the [README.md](packages/frontend/README.md) to know how to work or deploy it.

## Deploy
This project uses *Terraform* to build the docker containers to execute the applications. *Terraform* creates all the components: images, containers, networks, and volumes (for this project).

### Setup
This section show how to prepare the project (database, files) to create the docker containers with the applications.

#### Variables
You have to create a file called **infrastructure/terraform/terraform.tfvars** with the required values for the containers. You have an example in the file **infrastructure/terraform/terraform.tfvars.example**.

#### Setup the Postgres instance (optional)
If you're going to use *Postgres* from existed instance you can skip this section.

In the dir **infrastructure/terraform** exists a file called *repository.tf.optional*. This file describes container for a *Postgres* instance. You have to rename it to *repository.tf* and *terraform* will generate a docker instance of *Postgres*.

You have to add extra variables configuration to the **infrastructure/terraform/terraform.tfvars** file:
```tf
// The postgres password
repository_root_password = "example"

// The path to persist the data of the database
repository_data = "/home/innsoft/data/repository"
```

You have this variables commented in the **infrastructure/terraform/terraform.tfvars.example** file.

#### Migrations
I use [go migrate](https://github.com/golang-migrate/migrate) to handle the migrations. The migrations files are located at **packages/backend/migrations**.

```sh
# Execute the migrations
migrate -database postgres://YOUR_USER:PASSWORD@HOST:5432/DATABASE?sslmode=disable -path packages/backend/migrations up
```

#### Prepare required files
The applications require an environment variables files. Each configuration is placed in the root application.

For the backend, you have to set the following variables in the file **packages/backend/.env**:
```txt
ENV=develop
API_PORT=3000
REPOSITORY_URI=postgres://USER:PASSWORD@HOST:5432/DATABASE
```
if you use the docker container, the port exposed is 9000 and you can use the port 3000 within the container.

For the frontend, you only have to define the API URL in the file **packages/frontend/.env**:
```txt
API_URI=http://theapihost:9000
```

### Now, deploy
In the root project path you have to execute the following commands:

```sh
# Initialize the terraform project
terraform -chdir=./infrastructure/terraform init
```

```sh
# Prepare
terraform -chdir=./infrastructure/terraform plan
```

```sh
# Create the items
terraform -chdir=./infrastructure/terraform apply
```

```sh
# Delete the items (optional)
terraform -chdir=./infrastructure/terraform destroy
```
