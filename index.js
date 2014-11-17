'use strict';

/**
 * @example node bin/render.js input.html -o output.html
 */

require("node-jsx").install({ extension: ".jsx" });

// neutralizes any require('foo/bar.less');
require.extensions['.less'] = function(){
  return '';
};

var path = require('path');
var through = require('through2');
var React = require('react');

var basePath = process.cwd();

module.exports = function reactInliner(){
  return through(function(chunk, enc, done){
    var frag = chunk.toString('utf8');
    var html = '';
    var reactMod = null;

    var attrMatch = frag.match('data-react-inject="([^"]+)"([^>]*)>');

    if (attrMatch){
      reactMod = require(path.join(basePath, attrMatch[1]));
      html = React.renderToString(React.createElement(reactMod, reactMod.__reactData || null));

      done(null, frag.replace(attrMatch[0], attrMatch[0] + html));
    }
    else {
      done(null, frag);
    }

  });
};