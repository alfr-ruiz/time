# Use official Node.js image
FROM node:18-slim

WORKDIR /app

# Copy package.json, configuration files and build files
COPY package*.json ./
COPY next.config.js ./
COPY postcss.config.js ./
COPY tailwind.config.js ./
COPY tsconfig.json ./

# Copy config directory
COPY config ./config/

# Install dependencies including dev dependencies
RUN npm install --include=dev

# Copy application files
COPY src ./src
COPY public ./public

# Build the application
RUN npm run build

# Create a non-root user for security
RUN useradd -m -u 1000 user
USER user

# Expose Next.js default port
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
