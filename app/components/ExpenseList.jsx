var React = require('react');
var {Link} = require('react-router');

var ExpenseItem = require('ExpenseItem');

var ExpenseList = React.createClass({
    renderList: function () {
        var {expenses} = this.props;
        return expenses.map((e) => {
            return <ExpenseItem key={e._id} {...e} />
        });
    },
    render: function () {
        return (
            <div>
                <h4>Expenses</h4>
                <Link to="/expenses/new">Add a expense</Link>
                <ul>
                    {this.renderList()}
                </ul>
            </div>
        );
    }
});

module.exports = ExpenseList;