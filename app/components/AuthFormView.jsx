var React = require('react');

var AuthFormView = React.createClass({
    onSubmit: function (e) {
        e.preventDefault();
        
        var username = this.refs.username.value.trim();
        var password = this.refs.password.value;
        
        if (username && password) {
            var {showAccountTypeSelector} = this.props;
            if (showAccountTypeSelector) {
                var accountType = this.refs.accountType.value;
                this.props.onSubmit(username, password, accountType);
            } else {
                this.props.onSubmit(username, password);
            }
        }

    },
    render: function () {
        var {showAccountTypeSelector} = this.props;
        
        var renderAccountTypeSelector = () => {
            if (showAccountTypeSelector) {
                return (
                    <select ref="accountType">
                        <option value="regular">Regular</option>
                        <option value="admin">Admin</option>
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

module.exports = AuthFormView;