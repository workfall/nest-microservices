import { Module } from '@nestjs/common';
import { TestServiceController } from './test-service.controller';
import { TestServiceService } from './test-service.service';

@Module({
  controllers: [TestServiceController],
  providers: [TestServiceService]
})
export class TestServiceModule {}
