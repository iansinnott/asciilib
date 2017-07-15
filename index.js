const { argv } = require('yargs');

const find = require('./find.js');

const searchTerm = argv.query;

find(searchTerm).toArray().subscribe(
  results => console.log('Found', JSON.stringify(results, null, 2)),
  err => console.log('Broke', err),
);
