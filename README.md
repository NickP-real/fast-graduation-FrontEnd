# Fast Graduation Frontend

This is only frontend part of the "Fast Graduation" project using Nextjs.
This project is a term project of 204361 Software Engineering, Chiang Mai University, Thailand.

## What is Fast Graduation

Fast graduation is a web application for recommending the course that should be enroll for 
super senior student to graduate as soon as possible.

## Requirement

- Docker compose repository for the api, backend data

```bash
git clone --recursive "https://github.com/Touutae-lab/FastGraduation-DockerCompose.git"
```

- Node version 16.15.1 or newer
- pnpm

## Getting Started

First, run the docker compose:

```bash
# Supposed to be in FastGraduation-DockerCompose Folder
docker compose up -d
# Stop frontend part of docker for developing
docker compose stop frontend
```

Then, run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
