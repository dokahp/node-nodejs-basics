import zlib from 'zlib';
import { fileURLToPath } from 'url';
import fs from 'fs';
import path from 'path';

export const decompress = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const fileToDecompressPath = path.join(__dirname, 'files', 'archive.gz');
    const outputPath = path.join(__dirname, 'files', 'fileToCompress.txt');
    const unzip = zlib.createUnzip();
    const input = fs.createReadStream(fileToDecompressPath);
    const output = fs.createWriteStream(outputPath);
    input.pipe(unzip).pipe(output);
};

decompress();