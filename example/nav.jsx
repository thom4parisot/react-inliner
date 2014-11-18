/** @jsx React.DOM */

'use strict';

var React = require('react');

module.exports = React.createClass({
  getDefaultProps: function(){
    return {
      links: [
        { link: '/', label: 'Home' },
        { link: '/selfie', label: 'About' }
      ]
    };
  },
  render: function(){
    var items = this.props.links.map(function(prop, i){
      return (<li><a href={prop.link} key={i}>{prop.label}</a></li>);
    });

    return (<ul>{items}</ul>);
  }
});