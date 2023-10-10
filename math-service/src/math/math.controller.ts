import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { CalculateRequest } from './math.interface';

@Controller('math')
export class MathController {
  @MessagePattern({ cmd: 'add' })
  add(req: CalculateRequest): number {
    return req.firstNumber + req.secondNumber;
  }

  @MessagePattern({ cmd: 'sub' })
  substract(req: CalculateRequest): number {
    return req.firstNumber - req.secondNumber;
  }

  @MessagePattern({ cmd: 'multiply' })
  multiply(req: CalculateRequest): number {
    return req.firstNumber * req.secondNumber;
  }

  @MessagePattern({ cmd: 'div' })
  divide(req: CalculateRequest): number {
    return req.firstNumber / req.secondNumber;
  }
}
