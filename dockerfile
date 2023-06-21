FROM node:18-apine

WORKDIR /app

COPY package.json .

# EXPOSE 5173

RUN npm i

COPY ..

CMD ["npm","run","dev"]
