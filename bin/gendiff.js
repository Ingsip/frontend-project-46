#!/usr/bin/env node
import { Command } from 'commander';
import genDiff from '../src/index.js';

const program = new Command();
program
  .name('gendiff')
  .version('0.0.1', '-V, --version', 'output the version number')
  .option('-f, --format <type>', 'output format')
  .description('Compares two configuration files and shows a difference.')
  .argument('<filepath1> <filepath2>')
  .action((filepath1, filepath2) => {
    console.log(genDiff(filepath1, filepath2, program.opts().format));
  });
program.parse();

// genDiff('__fixtures__/file1.json', '__fixtures__/file2.json');

/* import sum from "../src/parsers.js";

console.log(sum(1, 2)); */
