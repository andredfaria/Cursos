FROM node:15.11.0

RUN npm install -g npm@7.7.5

ENV HOME=/usr/local/docker

WORKDIR $HOME/jsExpert

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]