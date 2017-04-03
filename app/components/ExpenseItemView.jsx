var React = require('react');

var ExpenseItemView = React.createClass({
    render: function () {
        var {amount, description, datetime} = this.props;
        return (
            <li>
                <div className="row small-2 medium-6">
                    <div className="column">
                        <span>{datetime}</span>
                    </div>
                    <div className="column">
                        <div className="row">
                            <span>{description}</span>
                        </div>
                        <div className="row">
                            <span><h4>${amount}</h4></span>
                        </div>
                    </div>
                </div>
            </li>
        );
    }
});

module.exports = ExpenseItemView;