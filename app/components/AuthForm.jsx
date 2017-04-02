var React = require('react');

var AuthForm = React.createClass({
    onSubmit: function (e) {
        e.preventDefault();
        
        var username = this.refs.username.value.trim();
        var password = this.refs.password.value;
        var accountType = this.refs.accountType.value;

        if (username && password) {
            this.props.onSubmit(username, password, accountType);
        } 
    },
    render: function () {
        var {showAccountTypeSelector} = this.props;
        
        var renderAccountTypeSelector = () => {
            if (showAccountTypeSelector) {
                return (
                    <select refs="accountType">
                        <option value="admin">Admin</option>
                        <option value="regular">Regular</option>
                    </select>
                );
            }
            return;
        };
        
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input ref="username" type="text" placeholder="username" />
                    <input ref="password" type="password" placeholder="password" />
                    {renderAccountTypeSelector()}
                    <button className="button" type="submit">Submit</button>
                </form>
            </div>
        );
    }
});

module.exports = AuthForm;