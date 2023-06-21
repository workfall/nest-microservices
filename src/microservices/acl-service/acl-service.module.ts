import { Module } from '@nestjs/common';
import { AclServiceController } from './acl-service.controller';
import { AclServiceService } from './acl-service.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { KafkaService } from '../kafka-service/kafka.service';
import { KafkaModule } from '../kafka-service/kafka.module';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'KAFKA_SERVICE',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'acl-service',
            brokers: ['kafka-service:9092'], // Use the Docker service name and port here
          },
          consumer: {
            groupId: 'acl-service-consumer', // It's recommended to have unique consumer groups for each microservice
          },
        },
      },
    ]),
    KafkaModule,
  ],
  controllers: [AclServiceController],
  providers: [AclServiceService, KafkaService],
})
export class AclServiceModule {}
