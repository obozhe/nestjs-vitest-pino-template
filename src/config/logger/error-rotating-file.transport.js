import path from 'node:path';
import { createStream } from 'rotating-file-stream';

export default () => {
  return createStream('error.log', {
    size: '50M',
    interval: '7d',
    compress: 'gzip',
    path: path.resolve(__dirname, '../../logs'),
  });
};
