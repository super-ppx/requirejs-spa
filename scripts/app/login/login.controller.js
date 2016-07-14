define(['../BaseController'], function (Base) {
    var controller = new Base('login controller');
    /**
     *
     * @param {string} username
     * @param {string} password
     * @returns {boolean}
     */
    controller.login = function (username, password) {
        return true;
    };
    
    return controller;
});