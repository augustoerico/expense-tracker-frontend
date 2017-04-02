var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

var ExpenseForm = require('ExpenseForm');

describe('ExpenseForm', () => {

    it('should exist', () => {
        expect(ExpenseForm).toExist();
    });

    it('should call on submit handler', () => {
        var spy = expect.createSpy();
        var expenseForm = TestUtils.renderIntoDocument(<ExpenseForm onSubmit={spy}/>);
        var $el = $(ReactDOM.findDOMNode(expenseForm));

        expenseForm.refs.amount.value = 10.0;
        expenseForm.refs.description.value = 'Description';
        TestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toHaveBeenCalledWith(10.0, 'Description');
    });

    it('should not call on submit handler if amount not provided', () => {
        var spy = expect.createSpy();
        var expenseForm = TestUtils.renderIntoDocument(<ExpenseForm onSubmit={spy}/>);
        var $el = $(ReactDOM.findDOMNode(expenseForm));

        expenseForm.refs.description.value = 'Description';
        TestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toNotHaveBeenCalled();
    });

    it('should not call on submit handler for invalid amount', () => {
        var spy = expect.createSpy();
        var expenseForm = TestUtils.renderIntoDocument(<ExpenseForm onSubmit={spy}/>);
        var $el = $(ReactDOM.findDOMNode(expenseForm));

        expenseForm.refs.amount.value = 'invalid';
        expenseForm.refs.description.value = 'Description';
        TestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toNotHaveBeenCalled();
    });

});