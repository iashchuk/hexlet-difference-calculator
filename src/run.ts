import process from 'process';
import commander from 'commander';
import genDiff from './index';

const program = new commander.Command();

export default () => {
  program.version('1.0.0');
  program.description('Compares two configuration files and shows a difference.');
  program.option('-f, --format [type]', 'output format', 'pretty');
  program.arguments('<firstConfig> <secondConfig>');
  program.action((firstConfig, secondConfig) => {
    const diff = genDiff(firstConfig, secondConfig, program.format);
    console.log(diff);
  });
  program.parse(process.argv);
};
