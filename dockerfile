FROM node:latest
WORKDIR /app

COPY . .
RUN yarn install

RUN yarn compile

EXPOSE 4000
CMD ["node","src/index.js"]
