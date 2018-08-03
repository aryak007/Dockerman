FROM node:8.1

RUN mkdir /app
WORKDIR /app
COPY package.json .

COPY . /app

RUN npm install


EXPOSE 3000

CMD ["npm","run","gulp"]
