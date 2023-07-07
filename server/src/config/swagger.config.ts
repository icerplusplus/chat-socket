import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export const swaggerConfig = (app: any): void => {
  const config = new DocumentBuilder()
    .addBearerAuth()
    .setTitle('Nest Api example')
    .setDescription('The Nest API description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
};
