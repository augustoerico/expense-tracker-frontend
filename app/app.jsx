var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var Main = require('Main');
var SignUpController = require('SignUpController');
var SignInController = require('SignInController');
var ExpenseListController = require('ExpenseListController');
var ExpenseCreateController = require('ExpenseCreateController');

// load foundation
require('style-loader!css-loader!foundation-sites/dist/css/foundation.min.css');
// app css
require('style-loader!css-loader!sass-loader!applicationStyles');

$(document).foundation();

var requiresAuth = function (nextState, replace) {
  var token = localStorage.getItem('token');
  if (!token) replace('/');
} 

ReactDOM.render(
  <Router history={hashHistory}>
      <Route path="/" component={Main} >
        <IndexRoute component={SignUpController} />
        <Route path="/sign_up" component={SignUpController} />
        <Route path="/sign_in" component={SignInController} />
        <Route path="/expenses" component={ExpenseListController} onEnter={requiresAuth} />
        <Route path="/expenses/new" component={ExpenseCreateController} onEnter={requiresAuth} />
      </Route>
  </Router>,
  document.getElementById('app')
);
