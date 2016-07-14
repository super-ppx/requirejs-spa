define(['jquery'], function ($) {
    var loginStatus = false;

    function getLoginStatus() {
        return loginStatus;
    }

    function load(path) {
        require([path], function (view) {
            view.load();
        });
    }

    function hashToPath(hash) {
        if (hash.indexOf('#') !== -1) {
            hash = hash.substring(1);
        }
        return 'app/' + hash + '/' + hash;
    }

    $(function () {
        var hash = location.hash;
        if (hash) {
            load(hashToPath(hash));
        }

        $(window).on('hashchange', function (e) {
            load(hashToPath(location.hash));
        });
    });

    return {
        getLoginStatus: getLoginStatus
    }
});