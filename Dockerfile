# Use official Node.js LTS image
FROM node:lts

# Set environment variables (correct the typo)
ENV MONGO_DB_USERNAME=admin \
    MONGO_DB_PWD=qwerty

# Set working directory inside the container
WORKDIR /docker-testapp

# Copy package.json and package-lock.json first (for caching dependencies)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy rest of the source code
COPY . .

# Run the application
CMD ["node", "server.js"]
