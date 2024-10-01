import { Test, TestingModule } from '@nestjs/testing';
import { FizzbuzzService } from './fizzbuzz.service';

describe('FizzbuzzService', () => {
  let service: FizzbuzzService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FizzbuzzService],
    }).compile();

    service = module.get<FizzbuzzService>(FizzbuzzService);
  });

  it('Deberia ser definido', () => {
    expect(service).toBeDefined();
  });

  it('Deberia retornar Fizz cuando el numero sea multipo de 3', () => {
    expect(service.fizzbuzz(3)).toBe('Fizz');
  });

  it('Deberia retornar Buzz cuando el numero sea multiplo de 5', () => {
    expect(service.fizzbuzz(5)).toBe('Buzz');
  });

  it('Deberia retornar FizzBuzz cuando el numero sea multiplo de 15', () => {
    expect(service.fizzbuzz(15)).toBe('FizzBuzz');
  });

  it('Deberia retornar el mismo numero cuando este no sea multiplo de 3, 5 o 15', () => {
    expect(service.fizzbuzz(2)).toBe(2);
  });

  it('No deberia retornar nada cuando el numero no se encuentre entre 1 y 100', () => {
    expect(service.fizzbuzz(0)).toBe(undefined);
    expect(service.fizzbuzz(101)).toBe(undefined);
  });
});
