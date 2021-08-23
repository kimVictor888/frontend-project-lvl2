import path from 'path';

const getFixturePath = (fileName) => path.join(process.cwd(), '__tests__', '__fixtures__', fileName);

export default getFixturePath;
