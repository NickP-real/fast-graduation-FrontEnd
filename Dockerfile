FROM node:16.15.1 AS build

ENV PORT 3000

# Create app directory
WORKDIR /app

# Install pnpm
RUN curl -sL https://unpkg.com/@pnpm/self-installer | node

# Installing dependencies
COPY . .
RUN pnpm install supertokens-node supertokens-auth-react nextjs-cors
RUN pnpm install
RUN pnpm install express
RUN pnpm build