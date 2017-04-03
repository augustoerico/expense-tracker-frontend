var axios = require('axios');

// FIXME should use env var
const EXPENSES_API_URL = 'https://expenses-tracker-backend.herokuapp.com';

module.exports = {
    createExpense: function (amount, description) {
        var url = EXPENSES_API_URL + '/expenses'
        var body = {
            amount: amount,
            description: description
        };
        var instance = axios.create();
        // TODO fix backend to return token with 'Bearer '
        instance.defaults.headers.common['Authorization'] = localStorage.getItem('token');
        return instance.post(url, body);
    },
    listExpenses: function () {
        var url = EXPENSES_API_URL + '/expenses'
        var instance = axios.create();
        instance.defaults.headers.common['Authorization'] = localStorage.getItem('token');
        return instance.get(url);
    }
};