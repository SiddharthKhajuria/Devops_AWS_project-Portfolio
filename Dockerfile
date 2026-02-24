FROM node:14

WORKDIR /Desktop/code

COPY . .

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]

ENTRYPOINT ["npm"]

