import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: process.env.FRONTEND_URL, // Next.js dev server
    credentials: true,              // If using cookies
  });
  await app.listen(process.env.PORT ?? 3001);
}
bootstrap();
