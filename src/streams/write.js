import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { stdin, stdout } from 'process';


export const write = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const fileToWrite = path.join(__dirname, 'files', 'fileToWrite.txt');
    const writeStream = fs.createWriteStream(fileToWrite, {encoding: 'utf-8'});
    console.log('Hello, enter a text that you want save into file\n');
    stdin.on('data', (data) => writeStream.write(data));
    process.on('SIGINT', () => {
        stdout.write('\nEND! ALL DATA IN FILE!');
        process.exit();
    });
};

write();