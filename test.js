import test from 'ava';

import lib from './index.js'
import find from './find.js';

test('Find', async t => {
  let result;

  result = await find('eat').toArray().toPromise();
  t.snapshot(result)

  result = await find('shrug').toArray().toPromise();
  t.snapshot(result)
});
