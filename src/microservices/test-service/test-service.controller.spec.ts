import { Test, TestingModule } from '@nestjs/testing';
import { TestServiceController } from './test-service.controller';

describe('TestServiceController', () => {
  let controller: TestServiceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TestServiceController],
    }).compile();

    controller = module.get<TestServiceController>(TestServiceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
