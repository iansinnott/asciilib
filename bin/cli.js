#!/usr/bin/env node

const { Observable } = require('rxjs');
const { stripIndent } = require('common-tags');
const { last, prop, map, join, pipe } = require('ramda');

const find = require('../find.js');

const getSearchTerm = pipe(prop('_'), last);

const toJSON = x => JSON.stringify(x, null, 2);
const toString = pipe(
  map(x => `${x.entry}\t${x.name}`),
  join('\n')
);

require('yargs')
  .command(
    'find',
    'Search asciilib for matching entries',
    yargs => {
      yargs.option('json', {
        describe: 'Output matches as JSON objects',
        default: false,
        type: 'boolean', // This is important, it correctly interprets usage like find --json 'string'
      });
    },
    argv => {
      const format = argv.json ? toJSON : toString;

      Observable.of(argv)
        .map(getSearchTerm)
        .mergeMap(find)
        .toArray()
        .map(format)
        .subscribe(
          output => process.stdout.write(output + '\n')
        )
    }
  )
  .epilogue(stripIndent`
    For more information on a specifc command, run:

      $ asciilib <command> --help.

  `)
  .help()
  .argv;
