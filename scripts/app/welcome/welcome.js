define(function (require) {
    var $ = require('jquery'),
        model = require('./welcome.model'),
        template = require('text!./welcome.template.html'),
        controller = require('./welcome.controller');

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

    }

    return {
        load: load
    };
});