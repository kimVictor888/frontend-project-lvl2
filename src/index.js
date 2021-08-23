import _ from 'lodash';
import readFile from './helpers/readFile.js';
import getFixturePath from './helpers/getFixturePath.js';

const genDiff = (file1, file2) => {
  const result = [];
  const data1 = JSON.parse(readFile(getFixturePath(file1)));
  const data2 = JSON.parse(readFile(getFixturePath(file2)));

  const keys = _.sortBy(_.union(_.keys(data1), _.keys(data2)));

  keys.forEach((key) => {
    if (!_.has(data2, key)) {
      result.push({ name: key, type: '-', value: data1[key] });
    } else if (!_.has(data1, key)) {
      result.push({ name: key, type: '+', value: data2[key] });
    } else if (_.isEqual(data1[key], data2[key])) {
      result.push({ name: key, type: ' ', value: data1[key] });
    } else {
      result.push({ name: key, type: '-', value: data1[key] });
      result.push({ name: key, type: '+', value: data2[key] });
    }
  });

  return result.map((item) => `${item.type} ${item.name}: ${item.value}`).join('\n');
};

export default genDiff;
