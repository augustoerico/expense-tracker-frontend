var React = require('react');

var ExpenseItemView = React.createClass({
    render: function () {
        var {amount, description, datetime} = this.props;
        return (
            <li className="card">
                <div className="row">
                    <div className="column">
                        {datetime}
                    </div>
                    <div className="column">
                        {description}
                    </div>
                    <div className="column">
                        <h4>${amount}</h4>
                    </div>
                </div>
            </li>
        );
    }
});

module.exports = ExpenseItemView;