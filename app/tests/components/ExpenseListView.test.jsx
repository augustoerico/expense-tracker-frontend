var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

var ExpenseListView = require('ExpenseListView');

describe('ExpenseListView', () => {

    it('should exist', () => {
        expect(ExpenseListView).toExist();
    });

    it('should render a list', () => {
        var expenses = [
            { amount: 12.0, description: 'item 1', datetime: '2017-03-31T12:35:25Z'},
            { amount: 6.9, description: 'items 2', datetime: '2017-04-01T08:50:12Z'}
        ]
        var expenseListView = TestUtils.renderIntoDocument(<ExpenseListView expenses={expenses} />);
        var $el = $(ReactDOM.findDOMNode(expenseListView));
        
        expect($el.find('ul').length).toBe(1);
        expect($el.find('li').length).toBe(2);
    });

    // FIXME
    // it('should render a message if empty list', () => {
    //     var expenseListView = TestUtils.renderIntoDocument(<ExpenseListView expenses={[]} />);
    //     var $el = $(ReactDOM.findDOMNode(expenseListView));

    //     expect($el.find('ul > span').length).toBe(1);
    // });

});