import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { LoggerModule } from 'nestjs-pino';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import environment from './config/env';
import loggerConfig from './config/logger/logger-config';

@Module({
  imports: [ConfigModule.forRoot({ load: [environment] }), LoggerModule.forRoot(loggerConfig)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
