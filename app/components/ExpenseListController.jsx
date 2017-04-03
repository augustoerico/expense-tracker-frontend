var React = require('react');
var {Link} = require('react-router');

var ExpenseListView = require('ExpenseListView');

var expensesApi = require('expensesApi');

var ExpenseListController = React.createClass({
    getInitialState: function () {
        return ({
            expenses: [],
            isLoading: false
        });
    },
    doRender: function () {
        var {isLoading, expenses} = this.state;
        if (isLoading) {
            return (<span>Loading...</span>)
        } else {
            return (
                <ExpenseListView expenses={expenses} />
            );
        }
    },
    componentDidMount: function () {
        this.setState({ isLoading: true });
        var that = this;
        expensesApi.listExpenses().then(
            function (response) {
                that.setState({
                    isLoading: false,
                    expenses: response.data
                });
            },
            function (error) {
                that.setState({ isLoading: false });
                alert(error);
            }
        );
    },
    render: function () {
        return (
            <div>
                <Link to="/" onClick={ function () { localStorage.removeItem('token') } }>Logout</Link>
                <Link to="/expenses/new" >Add an expense</Link>
                {this.doRender()}
            </div>
        );
    }
});

module.exports = ExpenseListController;