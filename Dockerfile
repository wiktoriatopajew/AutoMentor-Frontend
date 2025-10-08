# Multi-stage build
# Stage 1: Build the app
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Debug: List what was copied
RUN ls -la

# Debug: Check if public folder exists
RUN ls -la public || echo "No public folder"

# Build the application
RUN npm run build

# List contents to verify build
RUN ls -la /app/dist

# Stage 2: Serve with nginx
FROM nginx:alpine

# Remove default nginx static assets
RUN rm -rf /usr/share/nginx/html/*

# Copy built app from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy nginx config
COPY nginx.conf /etc/nginx/nginx.conf

# Test nginx config
RUN nginx -t

# List copied files for debugging
RUN ls -la /usr/share/nginx/html

# Expose port
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
