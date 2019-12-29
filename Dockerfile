FROM node:10
# Setting working directory. All the path will be relative to WORKDIR
WORKDIR /codebuild/output/src311040613/src
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
