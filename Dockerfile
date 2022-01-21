FROM node:14.18.3-alpine

WORKDIR /app

# copy and install the node dependencies
COPY ["package.json", "yarn.lock", "./"]
RUN npm install production 

COPY . .

EXPOSE 3000

CMD ["npm", "start"]