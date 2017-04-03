var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

var ExpenseItemView = require('ExpenseItemView');

describe('ExpenseItemView', () => {

    it('should exist', () => {
        expect(ExpenseItemView).toExist();
    });

    it('should create an expense entry with props', () => {
        var props = { amount: 10.0, description: 'Item', datetime: '2017-03-31T12:30:25Z' };
        var expenseItemView = TestUtils.renderIntoDocument(<ExpenseItemView {...props} />);
        
        expect(expenseItemView.props.amount).toBe(10.0);
        expect(expenseItemView.props.description).toBe('Item');
        expect(expenseItemView.props.datetime).toBe('2017-03-31T12:30:25Z');
    });

    it('should render an expense entry', () => {
        var props = { amount: 10.0, description: 'Item', datetime: '2017-03-31T12:30:25Z' };
        var expenseItemVIew = TestUtils.renderIntoDocument(<ExpenseItemView {...props} />);
        var $el = $(ReactDOM.findDOMNode(expenseItemVIew));

        expect($el.find('span').length).toBe(3);
    });

});