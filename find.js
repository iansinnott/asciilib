const { Observable } = require('rxjs');
const kaomojilib = require('kaomojilib');
const { library } = kaomojilib;
const toPairs = require('ramda/src/toPairs');
const pipe = require('ramda/src/pipe');
const prop = require('ramda/src/prop');
const anyPass = require('ramda/src/anyPass');

const lib = Observable.from(toPairs(library));

const nameMatches = searchTerm => ([k]) => k.includes(searchTerm);

const getKeywords = pipe(([k, v]) => v, prop('keywords'));

const keywordsMatch = searchTerm => x => {
  return getKeywords(x).some(keyword => keyword.includes(searchTerm));
};

const getCategory = pipe(([k, v]) => v, prop('category'));

const categoryMatches = searchTerm => x => {
  return getCategory(x).includes(searchTerm);
};

const find = searchTerm => {
  return lib.filter(anyPass([
    nameMatches(searchTerm),
    keywordsMatch(searchTerm),
    categoryMatches(searchTerm),
  ]));
};

module.exports = find;
