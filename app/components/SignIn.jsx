var React = require('react');

var AuthForm = require('AuthForm');
var authApi = require('authApi');

var SignIn = React.createClass({
    onSubmit: function (username, password) {
        var that = this;
        authApi.signIn(username, password).then(
            function (response) {
                localStorage.setItem('token', response.data.token);
                that.setState({ isLoading: false });
                window.location.replace('/#/expenses'); // there must be a bette way to do this
            },
            function (error) {
                alert(error);
            }
        );
    },
    render: function () {
        return (
            <div>
                SignIn.jsx
                <AuthForm onSubmit={this.onSubmit}/>
            </div>
        );
    }
});

module.exports = SignIn;