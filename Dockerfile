# Step 1: Use an official Node.js runtime as the base image
FROM node:alpine

# Step 2: Set the working directory inside the container
WORKDIR /app

COPY . .

RUN npm install

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "dev"]

