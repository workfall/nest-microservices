import { Test, TestingModule } from '@nestjs/testing';
import { AclServiceService } from './acl-service.service';

describe('AclServiceService', () => {
  let service: AclServiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AclServiceService],
    }).compile();

    service = module.get<AclServiceService>(AclServiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
