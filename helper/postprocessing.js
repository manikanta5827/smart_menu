import { promises as fsPromises } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

export const postprocessing = async (data, filename = 'data.json') => {
    const filePath = join(__dirname, '../bin', filename);
    try {
        await fsPromises.writeFile(filePath, JSON.stringify(data, null, 2));
        console.log('Postprocessing finished...');
    } catch (err) {
        console.error('Error writing file:', err);
    }
};