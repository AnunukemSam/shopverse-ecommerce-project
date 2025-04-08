# Use an official Node.js runtime as the base image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy only the package files first for caching
COPY package*.json ./

# Install dependencies (only prod deps)
RUN npm install --omit=dev

# Copy the rest of your app's source code
COPY . .

# Use a non-root user for better security
RUN addgroup app && adduser -S -G app app
USER app

# Expose the service port
EXPOSE 3001

# Start the app
CMD ["node", "app.js"]
