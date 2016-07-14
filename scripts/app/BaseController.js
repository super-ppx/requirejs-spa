define(function () {
    function controllerBase(id) {
        this.id = id;
    }

    controllerBase.prototype = {
        setModel: function (model) {
            this.model = model;
        },
        setTemplate: function (template) {
            this.template = template;
        },
        render: function (container) {
            container.innerHTML = this.template;
        }
    };

    return controllerBase;
});