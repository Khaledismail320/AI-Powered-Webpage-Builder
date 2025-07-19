import { Test, TestingModule } from '@nestjs/testing';
import { AibuilderService } from './aibuilder.service';

describe('AibuilderService', () => {
  let service: AibuilderService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AibuilderService],
    }).compile();

    service = module.get<AibuilderService>(AibuilderService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
