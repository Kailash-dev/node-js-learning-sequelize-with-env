# Stage 1: Build the app
FROM node:18-alpine as build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

# Stage 2: Run the app
FROM node:18-alpine

WORKDIR /app

COPY --from=build /app .

CMD ["node", "dist/server.js"]
