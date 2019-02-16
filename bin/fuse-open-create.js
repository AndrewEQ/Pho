#!/usr/bin/env node

"use strict";

var version = '0.0.1';

var program = require('commander');

program
  .version(version, '-v, --version')
  .version(version, '-V, --version')
  .description('Fuse Open Creator')
  
  .parse(process.argv);