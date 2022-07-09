import { Test, TestingModule } from '@nestjs/testing';
import { AclServiceController } from './acl-service.controller';

describe('AclServiceController', () => {
  let controller: AclServiceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AclServiceController],
    }).compile();

    controller = module.get<AclServiceController>(AclServiceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
