import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

export const remove = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const fileToRemovePath = path.join(__dirname, 'files', 'fileToRemove.txt');
    fs.unlink(fileToRemovePath, (err) => {
        if (err) {throw new Error('FS operation failed')}
    });
};

remove();