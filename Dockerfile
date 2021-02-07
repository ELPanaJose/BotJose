FROM node

WORKDIR /usr/bot

COPY . .

RUN npm i 

CMD ["npm", "start"]