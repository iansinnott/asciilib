const { Observable } = require('rxjs');
const path = require('path');
const fs = require('fs');

const filepath = path.resolve('./ordered.json');

const toJSON = x => JSON.stringify(x, null, 2);

Observable.of(require('./lib.json'))
  .map(Object.keys)
  .map(xs => xs.sort())
  .map(toJSON)
  .do(data => {
    console.log(`Writing ${filepath}`);
    fs.writeFileSync(filepath, data, { encoding: 'utf8' });
  })
  .subscribe();
