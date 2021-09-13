import { Test, TestingModule } from '@nestjs/testing';
import { CalcularService } from './calcular.service';

describe('CalcularService', () => {
  let service: CalcularService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CalcularService],
    }).compile();

    service = module.get<CalcularService>(CalcularService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
