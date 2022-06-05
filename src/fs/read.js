import * as fs from 'fs';
import { fileURLToPath } from 'url';
import * as path from 'path';


export const read = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const fileToReadPath = path.join(__dirname, 'files', 'fileToRead.txt');
    fs.readFile(fileToReadPath, {encoding: 'utf-8'}, (err, data) => {
        if (err) {throw new Error('FS operation failed')}
        console.log(data);
    })
};


read();