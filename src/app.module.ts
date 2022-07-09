import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AclServiceModule } from './acl-service/acl-service.module';

@Module({
  imports: [AclServiceModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
