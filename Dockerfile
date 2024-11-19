# Use the official Node.js image with Alpine for smaller image size
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package files first to leverage Docker cache
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all other files to the container
COPY . .

# Build the Next.js app (Ensure code is fixed before running this step)
RUN npm run build

# Expose port 3000 to the host machine
EXPOSE 3000

# Define the command to run the application in development mode
ENTRYPOINT ["npm", "run", "dev"]
