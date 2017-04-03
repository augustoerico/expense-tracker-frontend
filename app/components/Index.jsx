var React = require('react');

var SignUpController = require('SignUpController');
var SignInController = require('SignInController');

var Index = React.createClass({
    render: function () {
        return (
            <div>
                <ul className="tabs" data-tab>
                    <li className="tab-title active">Sign Up</li>
                    <li className="tab-title">Sign In</li>
                </ul>
                <div className="tabs-content">
                    <div className="content active" id="sign-up-tab" >
                        <SignUpController />
                    </div>
                    <div className="content" id="sign-in-tab">
                        <SignInController />
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Index;