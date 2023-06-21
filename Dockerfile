# Stage 1: Install dependencies and build NestJS app
FROM node:18-alpine as build

RUN mkdir /usr/src
RUN mkdir /usr/src/app
WORKDIR /usr/src/app

ADD ./package.json                                            /usr/src/app/package.json
ADD ./tsconfig.json                                           /usr/src/app/tsconfig.json
ADD ./tsconfig.build.json                                     /usr/src/app/tsconfig.build.json
ADD ./src                                                     /usr/src/app/src
RUN yarn install

RUN yarn build

# Stage 2: Run the app
FROM node:18-alpine

WORKDIR /app

COPY --from=build /usr/src/app/dist /app/dist
COPY package.json yarn.lock ./
RUN yarn --production=true

EXPOSE 3000

CMD ["npm", "run", "start:prod"]
