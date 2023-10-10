import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CalculateDto {
  @ApiProperty()
  @IsNotEmpty()
  firstNumber: number;

  @ApiProperty()
  @IsNotEmpty()
  secondNumber: number;
}
