import * as path from 'path';
import * as fs from 'fs';
import { fileURLToPath } from 'url';
import * as crypto from 'crypto';

export const calculateHash = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const file = await fs.promises.readFile(path.join(__dirname, 'files', 'fileToCalculateHashFor.txt'));
    const hash = crypto.createHash('sha256').update(file);

    const hex = hash.digest('hex');
    return hex; 
};


console.log(await calculateHash());