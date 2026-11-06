import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  const config = new DocumentBuilder()
    .setTitle('SupportHub API')
    .setDescription('SupportHub Fullstack Showcase API')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('swagger', app, document);

  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);

  const port = process.env.PORT || 3000;
  await app.listen(port);

  if (process.env.NX_READY_SIGNAL_SOCKET) {
    try {
      const load = new Function(
        's',
        'return import(s)'
      ) as (s: string) => Promise<{ emitReadySignal(server: unknown): boolean }>;

      (await load('@nx/js/ready-signal')).emitReadySignal(
        app.getHttpServer()
      );
    } catch {
      // @nx/js isn't installed
    }
  }

  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );

  Logger.log(
    `📚 Swagger UI available at: http://localhost:${port}/swagger`
  );
}

bootstrap();