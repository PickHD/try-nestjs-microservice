import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.TCP,
      options: {
        host: 'math-service',
        port: 3001,
        retryAttempts: 3,
        retryDelay: 1,
      },
    },
  );
  await app.listen();
}
bootstrap();
