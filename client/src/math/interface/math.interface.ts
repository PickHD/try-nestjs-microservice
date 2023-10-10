import { CalculateDto } from '../dto/math.dto';

export interface IMathController {
  addHandler: (req: CalculateDto) => Promise<CalculateResponse>;
  substractHandler: (req: CalculateDto) => Promise<CalculateResponse>;
  multiplyHandler: (req: CalculateDto) => Promise<CalculateResponse>;
  divideHandler: (req: CalculateDto) => Promise<CalculateResponse>;
}

export interface IMathService {
  add: (req: CalculateDto) => Promise<CalculateResponse>;
  sub: (req: CalculateDto) => Promise<CalculateResponse>;
  multiply: (req: CalculateDto) => Promise<CalculateResponse>;
  div: (req: CalculateDto) => Promise<CalculateResponse>;
}

export interface CalculateResponse {
  result: number;
}
