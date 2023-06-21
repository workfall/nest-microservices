import { Body, Controller, Get, Post } from '@nestjs/common';
import { AclServiceService } from './acl-service.service';
import { KafkaService } from '../kafka-service/kafka.service';

@Controller('')
export class AclServiceController {
  constructor(
    private readonly aclService: AclServiceService,
    private readonly kafkaService: KafkaService,
  ) {}

  @Get()
  getAuth() {
    return this.aclService.getAuth();
  }

  @Post('signup')
  async signUp(@Body() body: any) {
    // handle the sign up logic here

    // Once the user has signed up, emit a 'user-signed-up' event to Kafka
    await this.kafkaService.sendMessage('user-signed-up', body);
  }
}
