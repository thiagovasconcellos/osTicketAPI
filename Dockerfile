FROM node:10-alpine

WORKDIR /usr/app/osticketapi
COPY package.json yarn.lock ./

RUN yarn

COPY . .

EXPOSE 3000
CMD ["yarn", "start"]