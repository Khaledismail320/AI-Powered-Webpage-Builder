import { Test, TestingModule } from '@nestjs/testing';
import { AibuilderController } from './aibuilder.controller';

describe('AibuilderController', () => {
  let controller: AibuilderController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AibuilderController],
    }).compile();

    controller = module.get<AibuilderController>(AibuilderController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
