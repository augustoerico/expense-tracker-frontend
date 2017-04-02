var React = require('react');
var {Link} = require('react-router');

var ExpenseList = require('ExpenseList');

var Expense = React.createClass({
    getInitialState: function () {
        return ({
            // TODO initialize expenses = []
            expenses: [
                {_id: '1', amount: 10.0, description: 'item 1', datetime:  '2017-03-31T03:00:00Z'},
                {_id: '2', amount: 8.57, description: 'item 2', datetime: '2017-04-01T12:45:12Z'},
                {_id: '3', amount: 10.3, description: 'item 3', datetime: '2017-04-02T10:34:01'}
            ],
            isLoading: false
        });
    },
    renderList: function () {
        if (this.state.isLoading) {
            return <span>Loading...</span>
        } else {
            return <ExpenseList expenses={this.state.expenses} />
        }
    },
    render: function () {
        return (
            <div>
                <Link to="/sign_in" onClick={ localStorage.removeItem('token') }>Logout</Link>
                {this.renderList()}
            </div>
        );
    }
});

module.exports = Expense;