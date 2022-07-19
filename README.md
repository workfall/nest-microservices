# NestJS Microservices Architecture Project

## Project Setup on local Machine (single service - best for development purposes)
- Clone this repository
- Run ```yarn``` command in the terminal
- Create a ```.env``` file in the root folder of the project.
- Add the required environment variables which are ```PORT```, ```RUN_TIME```, ```MICROSERVICE_NAME```. ```PORT``` can be any number which represent open ports on which the service can run, ```RUN_TIME``` can be either ```prod``` or ```dev```, ```MICROSERVICE_NAME``` can be either ```acl-service``` or ```test-service``` which is simply the folder name that contains the module we want to bootstrap in ```main.ts``` file.
- Run ```yarn start:dev``` command in the terminal.

## Run containerized/integrated microservices
- To run a containerized application which has all the microservices running, run ```docker-compose up``` command in the terminal. To run in detached mode, use ```docker-compose up -d```. Happy hacking!