var React = require('react');

var ExpenseItemView = require('ExpenseItemView');

var ExpenseListView = React.createClass({
    doRender: function () {
        var {expenses} = this.props;
        if (expenses) {
            return expenses.map((e) => {
                return (<ExpenseItemView key={e._id} {...e} />);
            });
        } else {
            return (<span>There are no expenses</span>);
        }
    },
    render: function () {
        return (
            <div>
                <h4>Expenses</h4>
                <ul className="menu vertical">
                    {this.doRender()}
                </ul>
            </div>
        );
    }
});

module.exports = ExpenseListView;