# Use the same Node.js version as your local machine
FROM node:20-bullseye

# Set working directory
WORKDIR /app

# Copy only package.json and package-lock.json first (for better caching)
COPY package*.json ./

# Install dependencies
RUN npm install

# Now copy the rest of the application files
COPY . .

# Expose port
EXPOSE 5001

# Start the server
CMD ["node", "src/index.js"]
