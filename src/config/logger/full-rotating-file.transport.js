import path from 'node:path';
import { createStream } from 'rotating-file-stream';

export default () =>
  createStream('full.log', {
    size: '50M',
    interval: '7d',
    compress: 'gzip',
    path: path.resolve(__dirname, '../../logs'),
  });
