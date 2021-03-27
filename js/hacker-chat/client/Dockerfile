FROM node

WORKDIR /usr/local/docker

COPY package*.json ./

RUN npm install -g npm@7.7.5
RUN npm install

COPY . .

EXPOSE 3000

CMD ["node", "index.js"]