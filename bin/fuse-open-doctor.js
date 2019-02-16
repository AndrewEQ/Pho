#!/usr/bin/env node

"use strict";

var version = '0.0.1';

var program = require('commander');

program
  .version(version, '-v, --version')
  .version(version, '-V, --version')
  .usage('[options] <file ...>')
  .description('Fuse Open Doctor');

program  
  .parse(process.argv);

console.log('DOCTORING...')