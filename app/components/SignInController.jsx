var React = require('react');
var {Link} = require('react-router');

var AuthFormView = require('AuthFormView');

var authApi = require('authApi');

var SignInController = React.createClass({
    getInitialState: function () {
        return ({ isLoading: false });
    },
    onSubmit: function (username, password) {
        var that = this;
        this.setState({ isLoading: true });
        authApi.signIn(username, password).then(
            function (response) {
                var token = response.data.token;
                localStorage.setItem('token', token);
                that.setState({ isLoading: false });
                window.location.replace('/#/expenses'); // FIXME there must be a better way to do this
            },
            function (error) {
                that.setState({ isLoading: false });
                alert(error);
            }
        );
    },
    doRender: function () {
        var {isLoading} = this.state;
        if (isLoading) {
            return (
                <h4 className="loading">Loading...</h4>
            );
        } else {
            return (
                <div>
                    <Link to="/sign_up" >Go to sign up</Link>
                    <AuthFormView onSubmit={this.onSubmit} />
                </div>
            );
        }
    },
    render: function () {
        return (
            <div>
                <div className="centered">
                    <h4>Sign In</h4>
                </div>
                {this.doRender()}
            </div>
        );
    }
});

module.exports = SignInController;