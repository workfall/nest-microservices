// kafka.service.ts
import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { Producer, Kafka, Consumer } from 'kafkajs';

@Injectable()
export class KafkaService implements OnModuleInit, OnModuleDestroy {
  private kafka: Kafka;
  private producer: Producer;
  private consumer: Consumer;

  // Event handlers, mapped by topic name
  private eventHandlers: Record<string, Array<(message: any) => void>> = {
    'user-signed-up': [
      (message) => console.log(`Handler 1 received: ${message}`),
      (message) => console.log(`Handler 2 received: ${message}`),
    ],
    // Other topics can go here...
  };

  constructor() {
    this.kafka = new Kafka({
      clientId: 'my-app',
      brokers: ['kafka-service:9092'], // use 'kafka-service' instead of 'localhost'
    });

    this.producer = this.kafka.producer();
    this.consumer = this.kafka.consumer({ groupId: 'my-group' }); // You should get groupId from config
  }

  async onModuleInit() {
    await this.producer.connect();
    await this.consumer.connect();
  }

  async onModuleDestroy() {
    await this.producer.disconnect();
    await this.consumer.disconnect();
  }

  async sendMessage(topic: string, message: any) {
    await this.producer.send({
      topic,
      messages: [{ value: JSON.stringify(message) }],
    });
  }

  async subscribeToTopic(topic: string) {
    await this.consumer.subscribe({ topic });

    await this.consumer.run({
      eachMessage: async ({ topic, partition, message }) => {
        const handlers = this.getHandlersForTopic(topic);
        const value = message.value
          ? JSON.parse(message.value.toString())
          : null;

        for (const handler of handlers) {
          handler(value);
        }
      },
    });
  }

  private getHandlersForTopic(topic: string) {
    return this.eventHandlers[topic] || [];
  }
}
