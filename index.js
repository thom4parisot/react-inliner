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
    var re = /data-react-(inject|inliner)="([^"]+)"([^>]*)>/gm;
    var attrMatch;

    while(attrMatch = re.exec(frag)){
      reactMod = require(path.join(basePath, attrMatch[2]));
      html = React.renderToString(React.createElement(reactMod, reactMod.__reactData || null));

      frag = frag.replace(attrMatch[0], attrMatch[0] + html)
    }

    done(null, frag);
  });
};