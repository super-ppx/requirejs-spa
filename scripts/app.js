requirejs.config({
    baseUrl: 'scripts/lib',
    paths: {
        app: '../app'
    }
});

require(['app/lib'], function ($$) {
    if (!$$.getLoginStatus()) {
        location.hash = 'login';
    }else{
        location.hash = 'welcome';
    }
});

