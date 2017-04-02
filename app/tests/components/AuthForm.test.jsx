var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

var AuthForm = require('AuthForm');

describe('AuthForm', () => {

    it('should exist', () => {
        expect(AuthForm).toExist();
    });

    it('should render account type selector', () => {
        var authForm = TestUtils.renderIntoDocument(<AuthForm showAccountTypeSelector={true}/>);
        var $el = $(ReactDOM.findDOMNode(authForm));
        var $selector = $el.find('select');
        
        expect($selector.length).toBe(1);
    });

    it('should call handler on form submit', () => {
        var spy = expect.createSpy();
        var authForm = TestUtils.renderIntoDocument(<AuthForm onSubmit={spy}/>);
        var $el = $(ReactDOM.findDOMNode(authForm));

        authForm.refs.username.value = 'username';
        authForm.refs.password.value = 'password';
        TestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toHaveBeenCalledWith('username', 'password');
    });

    it('should not call handler without username', () => {
        var spy = expect.createSpy();
        var authForm = TestUtils.renderIntoDocument(<AuthForm onSubmit={spy}/>);
        var $el = $(ReactDOM.findDOMNode(authForm));

        authForm.refs.password.value = 'password';
        TestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toNotHaveBeenCalled();
    });

    it('should not call handler without password', () => {
        var spy = expect.createSpy();
        var authForm = TestUtils.renderIntoDocument(<AuthForm onSubmit={spy}/>);
        var $el = $(ReactDOM.findDOMNode(authForm));

        authForm.refs.username.value = 'username';
        TestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toNotHaveBeenCalled();
    });

});