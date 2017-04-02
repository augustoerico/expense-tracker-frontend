var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var Main = require('Main');
var SignUp = require('SignUp');
var SignIn = require('SignIn');

// load foundation
require('style-loader!css-loader!foundation-sites/dist/css/foundation.min.css');
// app css
require('style-loader!css-loader!sass-loader!applicationStyles');

$(document).foundation();

ReactDOM.render(
  <Router history={hashHistory}>
      <Route path="/" component={Main}>
          <Route path="/sign_in" component={SignIn} />
          <Route path="/sign_up" component={SignUp} />
          <IndexRoute component={SignUp} />
      </Route>
  </Router>,
  document.getElementById('app')
);
