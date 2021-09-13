import { Test, TestingModule } from '@nestjs/testing';
import { CalcularController } from './calcular.controller';

describe('CalcularController', () => {
  let controller: CalcularController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CalcularController],
    }).compile();

    controller = module.get<CalcularController>(CalcularController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
