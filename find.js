const toPairs = require('ramda/src/toPairs');
const pipe = require('ramda/src/pipe');
const prop = require('ramda/src/prop');
const anyPass = require('ramda/src/anyPass');
const last = require('ramda/src/last');
const { Observable } = require('rxjs/Observable');
require('rxjs/add/observable/from');
require('rxjs/add/operator/filter');
require('rxjs/add/operator/map');
require('rxjs/add/operator/do');
require('rxjs/add/operator/toArray');
require('rxjs/add/operator/toPromise');

const asciilib = require('./index.js');

const lib = Observable.from(toPairs(asciilib.lib));

const nameMatches = searchTerm => ([k]) => k.includes(searchTerm);

const getKeywords = pipe(([k, v]) => v, prop('keywords'));

const keywordsMatch = searchTerm => x => {
  return getKeywords(x).some(keyword => keyword.includes(searchTerm));
};

const getCategory = pipe(([k, v]) => v, prop('category'));

const categoryMatches = searchTerm => x => {
  return getCategory(x).includes(searchTerm);
};

const find = searchTerm =>
  lib
    .filter(anyPass([
      nameMatches(searchTerm),
      keywordsMatch(searchTerm),
      categoryMatches(searchTerm),
    ]))
    .map(last);

module.exports = find;
