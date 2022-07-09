import { Module } from '@nestjs/common';
import { AclServiceController } from './acl-service.controller';
import { AclServiceService } from './acl-service.service';

@Module({
  controllers: [AclServiceController],
  providers: [AclServiceService]
})
export class AclServiceModule {}
