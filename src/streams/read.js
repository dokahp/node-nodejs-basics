import * as fs from 'fs';
import path from 'path';
import { stdout } from 'process';
import { fileURLToPath } from 'url';

export const read = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const readStream = fs.createReadStream(path.join(__dirname, 'files', 'fileToRead.txt'));
    let fileData = ''
    readStream.on('data', (data) => {
        fileData += data;
    });
    readStream.on('end', () => {
        stdout.write(fileData);
    });
};

read();