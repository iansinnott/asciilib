import test from 'ava';

import find from './find.js';

test('Find', async t => {
  const result = await find('eat').toArray().toPromise();
  t.snapshot(result)
});
