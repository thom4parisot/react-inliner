#!/usr/bin/env node

'use strict';

var inliner = require('../index.js');
var argv = require('yargs').argv;

var inputStream = process.stdin;
var outputStream = process.stdout;

inputStream
  .pipe(inliner())
  .pipe(outputStream);
