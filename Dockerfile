# Step 1: Use an official Node.js runtime as the base image
FROM node:18-alpine

# Step 2: Set working directory in the container
WORKDIR /app

# Step 3: Copy package.json and package-lock.json (or yarn.lock) to install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Step 4: Copy the rest of the application files to the container
COPY . .

# Step 5: Build the application
RUN npm run build

# Step 6: Run tests
RUN npm run test

# Step 7: Expose the port the app will run on (if applicable)
EXPOSE 3000

# Step 8: Define the command to run the app
CMD ["npm", "run", "dev"]
