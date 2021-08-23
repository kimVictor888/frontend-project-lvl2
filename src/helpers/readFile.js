import fs from 'fs';

const readFile = (path) => fs.readFileSync(path, 'utf-8');

export default readFile;
