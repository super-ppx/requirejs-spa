define(function (require) {
    var $ = require('jquery'),
        model = require('./login.model'),
        template = require('text!./login.template.html'),
        controller = require('./login.controller');

    /**
     * 对外暴露函数，用于视图加载
     */
    var load = function () {
        render();
        bind();
    };

    /**
     * 视图渲染
     */
    function render() {
        controller.setModel(model);
        controller.setTemplate(template);
        controller.render($('body')[0]);
    }

    /**
     * 事件绑定
     */
    function bind() {
        $('#js-login').on('click', function () {
            var username = $('username').val(),
                password = $('password').val();
            if (controller.login(username, password)) {
                location.hash = 'welcome';
            }
        });
    }

    return {
        load: load
    };
});