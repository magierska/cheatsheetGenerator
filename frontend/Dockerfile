# base image
FROM node:12.2.0-alpine

ARG API_URL

# set working directory
WORKDIR /web

# add `/web/node_modules/.bin` to $PATH
ENV PATH /web/node_modules/.bin:$PATH

# install and cache web dependencies
COPY . .
RUN sed -i "s/{{ API_URL }}/$API_URL/" /web/public/index.html 
RUN npm install --silent
RUN npm install react-scripts@3.0.1 -g --silent

# start web
CMD ["npm", "start"]
