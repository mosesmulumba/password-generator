FROM node:20

WORKDIR /app

COPY . /app

EXPOSE 3000

RUN npm install -g create-vite@latest && npm install

CMD ["npm","run","dev"]