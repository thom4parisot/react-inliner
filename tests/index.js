'use strict';

var test = require('tape');
var fs = require('fs');
var path = require('path');
var through = require('through2');
var inliner = require('../index.js');

var fixturesPath = path.join(__dirname, 'fixtures');

test('It should inline React components', function(t){
  t.plan(1);

  fs.createReadStream(path.join(fixturesPath, 'working.html'))
    .pipe(inliner())
    .pipe(through(function(chunk, enc, next){
      if (t.toString('utf8').indexOf('>react-inliner</h1>')){
        t.pass();
      }
    }));
});

test('It should emit an error if a module is not found', function(t){
  t.plan(1);

  var transform = inliner();

  transform.on('error', function(err){
    t.ok(err);
  });

  fs.createReadStream(path.join(fixturesPath, 'module-not-found.html'))
    .pipe(transform)
});

test('It should emit an error if a module is not a React component', function(t){
  t.plan(1);

  var transform = inliner();

  fs.createReadStream(path.join(fixturesPath, 'module-invalid.html'))
    .pipe(transform);

  transform.on('error', function(err){
    t.ok(err);
  });
});