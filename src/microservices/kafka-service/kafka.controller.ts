import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller('kafka')
export class KafkaController {
  @MessagePattern('my-topic')
  onMyTopic(@Payload() message: any) {
    console.log(`Received message: ${message.value}`);
  }
}
