# Use a lightweight Node.js base image
FROM node:18-alpine

# Create and set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install --production

# Copy application code
COPY . .

# Expose application port
EXPOSE 3000

# Start the server
CMD ["npm", "start"]
