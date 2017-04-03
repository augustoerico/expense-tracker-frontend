var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

var AuthFormView = require('AuthFormView');

describe('AuthFormView', () => {

    it('should exist', () => {
        expect(AuthFormView).toExist();
    });

    it('should call handler on form submit', () => {
        var spy = expect.createSpy();
        var authFormView = TestUtils.renderIntoDocument(<AuthFormView onSubmit={spy}/>);
        var $el = $(ReactDOM.findDOMNode(authFormView));

        authFormView.refs.username.value = 'username';
        authFormView.refs.password.value = 'password';
        TestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toHaveBeenCalledWith('username', 'password');
    });

    it('should not call handler without username', () => {
        var spy = expect.createSpy();
        var authFormView = TestUtils.renderIntoDocument(<AuthFormView onSubmit={spy}/>);
        var $el = $(ReactDOM.findDOMNode(authFormView));

        authFormView.refs.password.value = 'password';
        TestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toNotHaveBeenCalled();
    });

    it('should not call handler without password', () => {
        var spy = expect.createSpy();
        var authFormView = TestUtils.renderIntoDocument(<AuthFormView onSubmit={spy}/>);
        var $el = $(ReactDOM.findDOMNode(authFormView));

        authFormView.refs.username.value = 'username';
        TestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toNotHaveBeenCalled();
    });

    it('should render account type selector', () => {
        var authFormView = TestUtils.renderIntoDocument(<AuthFormView showAccountTypeSelector={true}/>);
        var $el = $(ReactDOM.findDOMNode(authFormView));
        var $selector = $el.find('select');
        
        expect($selector.length).toBe(1);
    });

    it('should call handler on form submit with account type selector', () => {
        var spy = expect.createSpy();
        var authFormView = TestUtils.renderIntoDocument(<AuthFormView showAccountTypeSelector={true} onSubmit={spy} />);
        var $el = $(ReactDOM.findDOMNode(authFormView));

        authFormView.refs.username.value = 'username';
        authFormView.refs.password.value = 'password';
        authFormView.refs.accountType.value = 'admin';

        TestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toHaveBeenCalledWith('username', 'password', 'admin');
    });

});