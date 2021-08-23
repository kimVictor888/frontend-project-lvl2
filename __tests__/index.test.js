import genDiff from '../src/index.js';

test('generate difference .json', () => {
  expect(genDiff('file1.json', 'file2.json')).toMatch(`${'- follow: false\n'
      + '  host: hexlet.io\n'
      + '- proxy: 123.234.53.22\n'
      + '- timeout: 50\n'
      + '+ timeout: 20\n'}${
    '+ verbose: true\n'.trim()}`);
});

test('generate difference .yml', () => {
  expect(genDiff('file1.yml', 'file2.yml')).toMatch(`${'- follow: false\n'
    + '  host: hexlet.io\n'
    + '- proxy: 123.234.53.22\n'
    + '- timeout: 50\n'
    + '+ timeout: 20\n'}${
    '+ verbose: true\n'.trim()}`);
});

test('generate difference .yaml', () => {
  expect(genDiff('file1.yaml', 'file2.yaml')).toMatch(`${'- follow: false\n'
    + '  host: hexlet.io\n'
    + '- proxy: 123.234.53.22\n'
    + '- timeout: 50\n'
    + '+ timeout: 20\n'}${
    '+ verbose: true\n'.trim()}`);
});
