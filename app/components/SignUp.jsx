var React = require('react');

var AuthForm = require('AuthForm');

var SignUp = React.createClass({
    onSubmit: function (username, password, accountType) {
        alert('Ahoy! ' + username + ' ' + password + ' ' + accountType);
    },
    render: function () {
        return (
            <div>
                SignUp.jsx
                <AuthForm showAccountTypeSelector={true} onSubmit={this.onSubmit}/>
            </div>
        );
    }
});

module.exports = SignUp;