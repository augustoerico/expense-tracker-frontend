var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

var SignInController = require('SignInController');

describe('SignInController', () => {

    it('should exist', () => {
        expect(SignInController).toExist();
    });

    it('should render the sign in form', () => {
        var signInController = TestUtils.renderIntoDocument(<SignInController />);
        var $el = $(ReactDOM.findDOMNode(signInController));

        signInController.setState({ isLoading: false });
        
        expect($el.find('form').length).toBe(1);
    });

    it('should render a loading message', () => {
        var signInController = TestUtils.renderIntoDocument(<SignInController />);
        var $el = $(ReactDOM.findDOMNode(signInController));

        signInController.setState({ isLoading: true });

        expect($el.find('span.loading').length).toBe(1);
    });

});