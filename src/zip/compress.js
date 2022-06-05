import zlib from 'zlib';
import { fileURLToPath } from 'url';
import fs from 'fs';
import path from 'path';

export const compress = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const fileToCompressPath = path.join(__dirname, 'files', 'fileToCompress.txt');
    const outputPath = path.join(__dirname, 'files', 'archive.gz');
    const gzip = zlib.createGzip();
    const input = fs.createReadStream(fileToCompressPath);
    const output = fs.createWriteStream(outputPath);
    input.pipe(gzip).pipe(output);
};

compress();