import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import { Logger } from 'nestjs-pino';

import { AppModule } from './app.module';
import { EnvironmentType } from './config/env';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter(), {
    bufferLogs: true,
  });
  const configService = app.get(ConfigService<EnvironmentType>);
  const logger = app.get(Logger);

  app.useLogger(logger);
  await app.listen(configService.get<number>('port') ?? 3000);
  logger.debug(`Application is running on: ${await app.getUrl()}`);
}

void bootstrap();
