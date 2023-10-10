import { Module } from '@nestjs/common';
import { MathController } from './math/math.controller';

@Module({
  imports: [],
  controllers: [MathController],
})
export class AppModule {}
