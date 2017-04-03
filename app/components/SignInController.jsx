var React = require('react');

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
                console.log(error);
                that.setState({ isLoading: false });
                alert(error);
            }
        );
    },
    doRender: function () {
        var {isLoading} = this.state;
        if (isLoading) {
            return (
                <span className="loading">Loading...</span>
            );
        } else {
            return (<AuthFormView onSubmit={this.onSubmit} />);
        }
    },
    render: function () {
        return (
            <div>
                {this.doRender()}
            </div>
        );
    }
});

module.exports = SignInController;