import { NestFactory } from '@nestjs/core';

const MICROSERVICE_NAME = process.env.MICROSERVICE_NAME; // name of the microservice - should match the name of the folder containing the module
const PORT = process.env.PORT;
const RUN_TIME = process.env.RUN_TIME; // 'dev' or 'prod' in order to run the app in dev or prod mode

if (!MICROSERVICE_NAME) {
  throw new Error('No MICROSERVICE_NAME Provided');
}

if (!PORT) {
  throw new Error('No PORT Provided');
}

if (!RUN_TIME) {
  throw new Error('No RUN_TIME Provided');
}

const APPMODULE =
  RUN_TIME === 'dev'
    ? require(`./microservices/${MICROSERVICE_NAME}`).AppModule
    : require(`../dist/microservices/${MICROSERVICE_NAME}`).AppModule;

async function bootstrap() {
  const app = await NestFactory.create(APPMODULE, {cors: true});

  await app.listen(PORT);

  console.log(MICROSERVICE_NAME, ' is running on port ', PORT);
}
bootstrap();
