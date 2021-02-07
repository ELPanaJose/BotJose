FROM node

WORKDIR /usr/bot

COPY . .

RUN yarn

CMD ["yarn", "start"]