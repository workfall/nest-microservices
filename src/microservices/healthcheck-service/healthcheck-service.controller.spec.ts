import { Test, TestingModule } from '@nestjs/testing';
import { HealthcheckServiceController } from './healthcheck-service.controller';

describe('HealthcheckServiceController', () => {
  let controller: HealthcheckServiceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HealthcheckServiceController],
    }).compile();

    controller = module.get<HealthcheckServiceController>(HealthcheckServiceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
