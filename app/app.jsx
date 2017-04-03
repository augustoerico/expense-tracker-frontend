var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var Main = require('Main');
var SignInController = require('SignInController');

// load foundation
require('style-loader!css-loader!foundation-sites/dist/css/foundation.min.css');
// app css
require('style-loader!css-loader!sass-loader!applicationStyles');

$(document).foundation();

var requiresAuth = function (nextState, replace) {
  var token = localStorage.getItem('token');
  if (token) replace('/expenses');
} 

ReactDOM.render(
  <Router history={hashHistory}>
      <Route path="/" component={Main} >
        <Route path="/sign_in" component={SignInController} />
      </Route>
  </Router>,
  document.getElementById('app')
);
