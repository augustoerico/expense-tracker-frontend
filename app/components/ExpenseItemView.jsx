var React = require('react');

var ExpenseItemView = React.createClass({
    render: function () {
        var {amount, description, datetime} = this.props;
        return (
            <div>
                <div>
                    <span>{description}</span>
                </div>
                <div>
                    <span>{amount}</span>
                </div>
                <div>
                    <span>{datetime}</span>
                </div>
            </div>
        );
    }
});

module.exports = ExpenseItemView;