var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

var ExpenseFormView = require('ExpenseFormView');

describe('ExpenseFormView', () => {

    it('should exist', () => {
        expect(ExpenseFormView).toExist();
    });

    it('should call on submit handler', () => {
        var spy = expect.createSpy();
        var expenseFormView = TestUtils.renderIntoDocument(<ExpenseFormView onSubmit={spy}/>);
        var $el = $(ReactDOM.findDOMNode(expenseFormView));

        expenseFormView.refs.amount.value = 10.5;
        expenseFormView.refs.description.value = 'Description';
        TestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toHaveBeenCalledWith(10.5, 'Description');
    });

    it('should not call on submit handler if amount not provided', () => {
        var spy = expect.createSpy();
        var expenseFormView = TestUtils.renderIntoDocument(<ExpenseFormView onSubmit={spy}/>);
        var $el = $(ReactDOM.findDOMNode(expenseFormView));

        expenseFormView.refs.description.value = 'Description';
        TestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toNotHaveBeenCalled();
    });

    it('should not call on submit handler for invalid amount', () => {
        var spy = expect.createSpy();
        var expenseFormView = TestUtils.renderIntoDocument(<ExpenseFormView onSubmit={spy}/>);
        var $el = $(ReactDOM.findDOMNode(expenseFormView));

        expenseFormView.refs.amount.value = 'invalid';
        expenseFormView.refs.description.value = 'Description';
        TestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toNotHaveBeenCalled();
    });

});