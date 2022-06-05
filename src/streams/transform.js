import { Transform } from 'stream';
import { stdin, stdout } from 'process';
import { EOL } from 'os';

export const transform = async () => {
  const myTransform = new Transform({
    transform: (chunk, _, callback) => {
      const reversedChunk = chunk.toString().split('').reverse().join('');
      callback(null, reversedChunk + EOL);
    },
  });
  stdout.write(`Enter a text that you want to reverse:${EOL}`)
  stdin.pipe(myTransform).pipe(stdout);
};

transform();
