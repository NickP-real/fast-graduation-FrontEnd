FROM node:16.15.1

ENV PORT 3000
ENV NODE_ENV production

# Create app directory
WORKDIR /app

# Installing dependencies
COPY . .
RUN yarn && yarn run build
EXPOSE 3000

# Running the app
CMD yarn run start

