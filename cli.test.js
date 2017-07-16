import test from 'ava';
import child_process from 'child_process';

const runCLI = args =>
  child_process.execSync(`./bin/cli.js ${args}`, { encoding: 'utf8' });

test('cli find', t => {
  let result;

  result = runCLI('find food');
  t.snapshot(result);

  result = runCLI('find --json food');
  t.snapshot(result);
});
