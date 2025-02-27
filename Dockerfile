# Use official Node.js image
FROM node:18-slim

WORKDIR /app

COPY package*.json ./

# Install dependencies
RUN npm install

# Copy application files
COPY . .

# Build the application
RUN npm run build

# Create a non-root user for security
RUN useradd -m -u 1000 user
USER user

# Expose Next.js default port
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
