define(['../BaseController'], function (Base) {
    var controller = new Base('welcome controller');

    /**
     *
     * @param username
     */
    controller.sayHi = function (username) {
        alert('hello ' + username);
    };

    return controller;
});