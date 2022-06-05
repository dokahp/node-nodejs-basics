import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';


export const copy = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const dirToCopyPath = path.join(__dirname, 'files');
    const newDir = path.join(__dirname, 'files_copy');
    fs.mkdir(newDir, (error) => {
        if (error) {
            throw new Error('FS operation failed')
        };
        fs.readdir(dirToCopyPath, (error, files) => {
            if (error) {
                throw new Error('FS operation failed') 
            } else {
                files.forEach(file => {
                    fs.promises.copyFile(path.join(dirToCopyPath, file), path.join(newDir, file));
                });
            }
        });
    });
};

copy();