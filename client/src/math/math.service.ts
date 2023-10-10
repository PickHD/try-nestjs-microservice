import { Inject, Injectable } from '@nestjs/common';
import { CalculateDto } from './dto/math.dto';
import { CalculateResponse, IMathService } from './interface/math.interface';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class MathService implements IMathService {
  constructor(
    @Inject('MATH_SERVICE') private readonly clientMath: ClientProxy,
  ) {}

  async add(req: CalculateDto): Promise<CalculateResponse> {
    const pattern = { cmd: 'add' };

    const result = await lastValueFrom(
      this.clientMath.send<number>(pattern, req),
    );

    return {
      result: result,
    };
  }

  async sub(req: CalculateDto): Promise<CalculateResponse> {
    const pattern = { cmd: 'sub' };

    const result = await lastValueFrom(
      this.clientMath.send<number>(pattern, req),
    );

    return {
      result: result,
    };
  }

  async multiply(req: CalculateDto): Promise<CalculateResponse> {
    const pattern = { cmd: 'multiply' };

    const result = await lastValueFrom(
      this.clientMath.send<number>(pattern, req),
    );

    return {
      result: result,
    };
  }

  async div(req: CalculateDto): Promise<CalculateResponse> {
    const pattern = { cmd: 'div' };

    const result = await lastValueFrom(
      this.clientMath.send<number>(pattern, req),
    );

    return {
      result: result,
    };
  }
}
