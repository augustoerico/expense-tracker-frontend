var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var Main = require('Main');
var SignUp = require('SignUp');
var SignIn = require('SignIn');
var Expense = require('Expense');

// load foundation
require('style-loader!css-loader!foundation-sites/dist/css/foundation.min.css');
// app css
require('style-loader!css-loader!sass-loader!applicationStyles');

$(document).foundation();

var requireAuth = function (nextState, replace) {
  var token = localStorage.getItem('token');
  if (!token) replace('/sign_in');
};

ReactDOM.render(
  <Router history={hashHistory}>
      <Route path="/" component={Main}>
          <Route path="/sign_in" component={SignIn} />
          <Route path="/sign_up" component={SignUp} />
          <Route path="/expenses" component={Expense} onEnter={requireAuth} />
          <IndexRoute component={SignUp} />
      </Route>
  </Router>,
  document.getElementById('app')
);
