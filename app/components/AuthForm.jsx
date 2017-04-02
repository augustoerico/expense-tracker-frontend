var React = require('react');

var AuthForm = React.createClass({
    onSubmit: function (e) {
        e.preventDefault();
        
        var username = this.refs.username.value.trim();
        var password = this.refs.password.value;

        if (username && password) {
            this.props.onSubmit(username, password);
        } 
    },
    render: function () {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input ref="username" type="text" placeholder="username" />
                    <input ref="password" type="password" placeholder="password" />
                    <button className="button" type="submit">Submit</button>
                </form>
            </div>
        );
    }
});

module.exports = AuthForm;