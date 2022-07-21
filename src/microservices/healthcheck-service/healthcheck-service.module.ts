import { Module } from '@nestjs/common';
import { HealthcheckServiceController } from './healthcheck-service.controller';

@Module({
  controllers: [HealthcheckServiceController]
})
export class HealthcheckServiceModule {}
