var React = require('react');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var Main = require('Main');
var SignUp = require('SignUp');
var SignIn = require('SignIn');

var App = React.createClass({
    render: function () {
        return (
            <div>
                App.jsx
            </div>
        )
    }
});

module.exports = App;