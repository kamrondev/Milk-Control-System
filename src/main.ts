import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function start() {
  const app = await NestFactory.create(AppModule);
  const PORT = process.env.PORT || 8080;
  app.setGlobalPrefix('/v1/api');
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe())
  await app.listen(PORT, () => console.log(`Server ishga tushdi: ${PORT}`));
}
start();