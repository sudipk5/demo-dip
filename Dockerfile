# Use official Node.js LTS image
FROM node


ENV MONGO_DB_USERNAME=admin \
    MONDO_DB_PWD_=qwerty



# Copy package.json and package-lock.json
COPY . /docker-testapp




# Run the application
CMD ["node" , "/docker-testapp/server.js"]
