import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { swaggerConfig } from './config';

async function bootstrap() {
  async function bootstrap() {
    const app = await NestFactory.create(AppModule, {
      rawBody: true,
      bodyParser: true,
    });

    // Enable CORS with the specified options
    app.enableCors({
      origin: 'http://localhost:3000', // Replace with the origin of your Next.js client
      methods: ['GET', 'POST', 'PUT', 'DELETE'],
      allowedHeaders: ['Content-Type', 'Authorization'],
      credentials: true, // If you need to send cookies or authentication headers
    });

    // set global prefix for all routes
    app.setGlobalPrefix('api');

    // use validator in global
    app.useGlobalPipes(new ValidationPipe());

    // Swagger config
    swaggerConfig(app);

    await app.listen(process.env.PORT);
  }
  bootstrap();
}
bootstrap();
