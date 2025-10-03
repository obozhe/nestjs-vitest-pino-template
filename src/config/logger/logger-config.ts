import { Params } from 'nestjs-pino';
import path from 'node:path';

export default {
  pinoHttp: {
    level: process.env.NODE_ENV !== 'production' ? 'debug' : 'info',
    transport:
      process.env.NODE_ENV !== 'production'
        ? {
            target: 'pino-pretty',
            options: {
              colorize: true,
            },
          }
        : {
            targets: [
              {
                target: path.resolve(__dirname, 'full-rotating-file.transport.js'),
              },
              {
                level: 'error',
                target: path.resolve(__dirname, 'error-rotating-file.transport.js'),
              },
              {
                level: 'info',
                target: path.resolve(__dirname, 'process-stdout.transport.js'),
              },
            ],
          },
    redact: {
      paths: ['user.name', 'user.address', 'user.passport', 'user.phone'],
      remove: true,
    },
  },
} as Params;
