#!/usr/bin/env node
import genDiff from "../src/index.js";
import parser from "../src/parsers.js";

import { Command } from 'commander';
const program = new Command();
program
  .version('0.0.1', '-V, --version', 'output the version number')
  .option('-f, --format [type]', 'output format')
  .description('Compares two configuration files and shows a difference.')
  .argument('<filepath1> <filepath2>')
  /*.action((filepath1, filepath2) => {
    console.log(genDiff(filepath1, filepath2));
  })*/

program.parse(process.argv);
//.parse();


genDiff('__fixtures__/file1.json', '__fixtures__/file2.json');











/*import sum from "../index.js";

sum();*/

