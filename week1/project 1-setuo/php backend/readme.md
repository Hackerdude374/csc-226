# PHP Docker Project

This project sets up a simple PHP development environment using Docker and Apache.

## Project Structure

```
project-root/
│
├── docker-compose.yml
├── Dockerfile
├── index.php
└── README.md
```

## Prerequisites

- Docker
- Docker Compose

## Getting Started

1. Clone this repository or copy the files into your project directory.
2. Open a terminal and navigate to the project directory.

## Running the Application

To start the application, run:

```bash
docker-compose up --build
```

This command builds the Docker image (if not already built) and starts the container.

To run the container in detached mode (in the background):

```bash
docker-compose up -d
```

## Accessing the Application

Once the container is running, you can access the PHP application by opening a web browser and navigating to:

```
http://localhost:8080
```

## Stopping the Application

To stop the application, press `Ctrl+C` in the terminal where docker-compose is running.

If running in detached mode, use:

```bash
docker-compose down
```

## Viewing Logs

If running in detached mode, you can view logs with:

```bash
docker-compose logs -f
```

## Making Changes

The `index.php` file in the project root is mapped to the container's web root. Any changes you make to this file will be immediately reflected in the running application.

## Dockerfile

The Dockerfile uses the official PHP 8.0 Apache image and sets up the necessary environment for running a PHP application.

## docker-compose.yml

The docker-compose.yml file defines the service configuration:

- Builds the image from the Dockerfile
- Maps port 8080 on the host to port 80 in the container
- Sets up a volume to sync the local directory with the container's web root

## Troubleshooting

If you encounter any issues:

1. Ensure Docker is running on your system.
2. Check that ports 8080 is not being used by another application.
3. Review the Docker logs for any error messages.

## Additional Resources

- [Docker Documentation](https://docs.docker.com/)
- [PHP Documentation](https://www.php.net/docs.php)
- [Apache HTTP Server Documentation](https://httpd.apache.org/docs/)