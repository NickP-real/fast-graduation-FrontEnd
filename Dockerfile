FROM node:16.15.1 AS build
# Create app directory
WORKDIR /app
# Install pnpm
RUN curl -sL https://unpkg.com/@pnpm/self-installer | node
# Installing dependencies
COPY . .
RUN pnpm install && pnpm build

# Run
ENV PORT 3000
CMD pnpm start
