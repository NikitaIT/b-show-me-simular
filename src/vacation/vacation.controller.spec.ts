import { Test, TestingModule } from '@nestjs/testing';
import { VacationController } from './vacation.controller';

describe('Vacation Controller', () => {
  let controller: VacationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VacationController],
    }).compile();

    controller = module.get<VacationController>(VacationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
