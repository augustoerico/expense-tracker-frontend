var React = require('react');

var ExpenseForm = React.createClass({
    onSubmit: function (e) {
        e.preventDefault();
        
        var strAmount = this.refs.amount.value;
        var description = this.refs.description.value;

        if (strAmount.match(/^\d+$/)) {
            var amount = parseFloat(strAmount, 10);
            this.props.onSubmit(amount, description);
        }
    },
    render: function() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input ref="amount" type="number" step="0.01" min="0" placeholder="Expense amount"/>
                    <input ref="description" type="text" placeholder="Expense description"/>
                    <button type="submit" className="button">Submit</button>
                </form>
            </div>
        );
    }
});

module.exports = ExpenseForm;