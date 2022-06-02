import * as fs from 'fs';
import * as path from 'path';
import {fileURLToPath } from 'url';

export const rename = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const renameFilePath = path.join(__dirname, 'files', 'wrongFilename.txt');
    const newFilePath = path.join(__dirname, 'files', 'properFilename.md');
    fs.exists(newFilePath, (err) => {
        if (err) {throw new Error('FS operation failed')}
        fs.rename(renameFilePath, newFilePath, (error) => {
            if (error) {throw new Error('FS operation failed')}
        });
    });
};

rename();