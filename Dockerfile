FROM node:10
RUN apk add nodejs --update --no-cache
# Setting working directory. All the path will be relative to WORKDIR
WORKDIR /usr/src/app
# Installing dependencies
COPY buildspec.yml ./
COPY package*.json ./
RUN npm install
# Copying source files
COPY . .
# Building app
RUN npm run build
EXPOSE 80
# Running the app
CMD [ "npm", "start" ]
