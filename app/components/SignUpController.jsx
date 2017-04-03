var React = require('react');
var {Link} = require('react-router');

var AuthFormView = require('AuthFormView');

var authApi = require('authApi');

var SignUpController = React.createClass({
    getInitialState: function () {
        return ({
            isLoading: false
        });
    },
    onSubmit: function (username, password, accountType) {
        this.setState({ isLoading: true });
        var that = this;
        authApi.signUp(username, password, accountType).then(
            function (response) {
                that.setState({ isLoading: false });
                window.location.replace('/#/sign_in');
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
            return (<span>Loading...</span>);
        } else {
            return (<AuthFormView showAccountTypeSelector={true} onSubmit={this.onSubmit} />);
        }
    },
    render: function () {
        return (
            <div>
                <div>
                    <span>Sign Up</span>
                </div>
                {this.doRender()}
            </div>
        );
    }
});

module.exports = SignUpController;