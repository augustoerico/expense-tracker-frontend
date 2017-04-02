var axios = require('axios');

// FIXME should use env var
const AUTH_API_URL = 'https://expenses-tracker-backend.herokuapp.com';

module.exports = {
    signUp: function(username, password, accountType) {
        var url = AUTH_API_URL + '/sign_up';
        var body = { 
            username: username, 
            password: password,
            accountType: accountType 
        };
        return axios.post(url, body);
    },
    signIn: function(username, password) {
        var url = AUTH_API_URL + '/sign_in';
        var body = {
            username: username,
            password: password
        };
        return axios.post(url, body);
    }
};