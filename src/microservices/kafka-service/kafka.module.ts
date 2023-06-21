import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { KafkaController } from './kafka.controller';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'KAFKA_SERVICE',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'kafkaService',
            brokers: ['localhost:9092'],
          },
          consumer: {
            groupId: 'kafkaConsumer',
          },
        },
      },
    ]),
  ],
  controllers: [KafkaController],
})
export class KafkaModule {}
