import path from 'path';
import yaml from 'js-yaml';

const parse = (file, fileName) => {
  const extname = path.extname(fileName);

  if (extname === '.yml' || extname === '.yaml') {
    return yaml.load(file);
  }
  return JSON.parse(file);
};

export default parse;
