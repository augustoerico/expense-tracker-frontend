var React = require('react');

var Main = (props) => {
    return (
        <div>
            Main.jsx
            {props.children}
        </div>
    );
};

module.exports = Main;