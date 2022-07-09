import { Test, TestingModule } from '@nestjs/testing';
import { TestServiceService } from './test-service.service';

describe('TestServiceService', () => {
  let service: TestServiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TestServiceService],
    }).compile();

    service = module.get<TestServiceService>(TestServiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
