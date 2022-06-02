import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

// wx+ flag open file for reading and writing, but fails if path exists

export const create = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const content = 'I am fresh and young';
    const newFilePath = path.join(__dirname, 'files', 'fresh.txt')
    fs.writeFile(newFilePath, content, {flag: 'wx+'}, (err) => {
        if (err) {throw new Error('FS operation failed')};
    });
};


create();