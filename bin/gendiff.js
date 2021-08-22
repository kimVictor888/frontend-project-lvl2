#!/usr/bin/env node
import commander from 'commander';

const program = new commander.Command();

program
  .version('0.0.1', '-v, --version', 'output the version number')
  .description('Compares two configuration files and shows a difference.')
  .arguments('<filepath1> <filepath2>')
  .option('-f, --format [type]', 'output format')
  .parse();

export default program;
