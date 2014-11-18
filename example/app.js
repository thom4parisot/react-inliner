'use strict';

var React = require('react');
var data = require('../package.json');

module.exports = React.createClass({
  render: function(){
    return React.DOM.h1(null, this.props.title);
  }
});

// temporary(?) way to autobind data when a component is rendered
// improvements/suggestions are welcome!
module.exports.__reactData = { title: data.name };