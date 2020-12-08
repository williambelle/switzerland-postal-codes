#!/usr/bin/env node

'use strict';

const fs = require('fs');

const codes = {};
const full = {};
const data = fs.readFileSync('data/postal-codes.tsv', 'utf8');
data.split('\n').forEach(function (row) {
  const columns = row.split('\t');
  if (columns.length === 5) {
    if (columns[0] in codes) {
      codes[columns[0]] = codes[columns[0]] + ' - ' + columns[1];
    } else {
      codes[columns[0]] = columns[1];
    }
    if (columns[0] in full) {
      const list = full[columns[0]];
      list.push(createObj(columns));
      full[columns[0]] = list;
    } else {
      full[columns[0]] = [createObj(columns)];
    }
  }
});
writeFile('dist/postal-codes.json', JSON.stringify(codes));
writeFile('dist/postal-codes-full.json', JSON.stringify(full));
writeFile(
  'dist-node/index.js', 'module.exports=' + JSON.stringify(codes) + ';'
);

function createObj (columns) {
  return {
    name: columns[1],
    canton: columns[2],
    latitude: columns[3],
    longitude: columns[4]
  };
}

function writeFile (file, content) {
  fs.writeFileSync(file, content, 'utf8');
}
