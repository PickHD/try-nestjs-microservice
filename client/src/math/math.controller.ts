import {
  Body,
  Controller,
  HttpCode,
  HttpException,
  HttpStatus,
  Logger,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CalculateResponse, IMathController } from './interface/math.interface';
import { CalculateDto } from './dto/math.dto';
import { MathService } from './math.service';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('math')
export class MathController implements IMathController {
  private readonly logger: Logger = new Logger();

  constructor(private readonly mathSvc: MathService) {}

  @ApiResponse({ status: 200, description: 'OK.' })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  @ApiResponse({ status: 422, description: 'Unprocessable Entity.' })
  @ApiTags('math')
  @Post('/add')
  @HttpCode(200)
  @UsePipes(ValidationPipe)
  async addHandler(@Body() req: CalculateDto): Promise<CalculateResponse> {
    try {
      const result = await this.mathSvc.add(req);

      return result;
    } catch (error) {
      this.logger.error(error.message);
      throw new HttpException(error.message, HttpStatus.UNPROCESSABLE_ENTITY);
    }
  }

  @ApiResponse({ status: 200, description: 'OK.' })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  @ApiResponse({ status: 422, description: 'Unprocessable Entity.' })
  @ApiTags('math')
  @Post('/substract')
  @HttpCode(200)
  @UsePipes(ValidationPipe)
  async substractHandler(
    @Body() req: CalculateDto,
  ): Promise<CalculateResponse> {
    try {
      const result = await this.mathSvc.sub(req);

      return result;
    } catch (error) {
      this.logger.error(error.message);
      throw new HttpException(error.message, HttpStatus.UNPROCESSABLE_ENTITY);
    }
  }

  @ApiResponse({ status: 200, description: 'OK.' })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  @ApiResponse({ status: 422, description: 'Unprocessable Entity.' })
  @ApiTags('math')
  @Post('/multiply')
  @HttpCode(200)
  @UsePipes(ValidationPipe)
  async multiplyHandler(@Body() req: CalculateDto): Promise<CalculateResponse> {
    try {
      const result = await this.mathSvc.multiply(req);

      return result;
    } catch (error) {
      this.logger.error(error.message);
      throw new HttpException(error.message, HttpStatus.UNPROCESSABLE_ENTITY);
    }
  }

  @ApiResponse({ status: 200, description: 'OK.' })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  @ApiResponse({ status: 422, description: 'Unprocessable Entity.' })
  @ApiTags('math')
  @Post('/divide')
  @HttpCode(200)
  @UsePipes(ValidationPipe)
  async divideHandler(@Body() req: CalculateDto): Promise<CalculateResponse> {
    try {
      const result = await this.mathSvc.div(req);

      return result;
    } catch (error) {
      this.logger.error(error.message);
      throw new HttpException(error.message, HttpStatus.UNPROCESSABLE_ENTITY);
    }
  }
}
