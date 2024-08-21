import { Command } from 'commander';
const program = new Command();
program
  .version('0.0.1', '-V, --version', 'output the version number')
  .option('-f, --format [type]', 'output format')
  .description('Compares two configuration files and shows a difference.')
  .argument('<filepath1> <filepath2>');

program.parse(process.argv);

export default program;
