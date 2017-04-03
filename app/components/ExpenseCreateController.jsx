var React = require('react');
var {Link} = require('react-router');

var ExpenseFormView = require('ExpenseFormView');

var expensesApi = require('expensesApi');

var ExpenseCreateController = React.createClass({
    getInitialState: function () {
        return ({ isLoading: false });
    },
    onSubmit: function (amount, description) {
        this.setState({ isLoading: true });
        var that = this;
        expensesApi.createExpense(amount, description).then(
            function (response) {
                that.setState({ isLoading: false });
                window.location.replace('/#/expenses');
            },
            function (error) {
                that.setState({ isLoading: false });
                alert(error);
            }
        );
    },
    doRender: function () {
        var {isLoading} = this.state;
        if (isLoading) {
            return (<span><h4 className="centered">Loading...</h4></span>);
        } else {
            return (
                <div>
                    <ExpenseFormView onSubmit={this.onSubmit} />
                </div>
            );
        }
    },
    render: function () {
        return (
            <div>
                {this.doRender()}
            </div>
        );
    }
});

module.exports = ExpenseCreateController;