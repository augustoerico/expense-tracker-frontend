var React = require('react');

var ExpenseItem = React.createClass({
    render: function () {
        var {amount, description, datetime} = this.props;
        return (
            <li>
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
            </li>
        );
    }
});

module.exports = ExpenseItem;