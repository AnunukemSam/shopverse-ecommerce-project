# Step 1: Build the React app with Vite
FROM node:18-alpine AS build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json (if you have it) first to leverage Docker cache
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the entire project to the container
COPY . .

# Build the project using Vite
RUN npm run build

# Step 2: Serve the built files
FROM nginx:alpine

# Copy the Nginx config into the container
COPY nginx.conf /etc/nginx/nginx.conf

# Copy the build folder from the previous stage to the Nginx container
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80 to access the app externally
EXPOSE 80

# Start Nginx to serve the app
CMD ["nginx", "-g", "daemon off;"]

