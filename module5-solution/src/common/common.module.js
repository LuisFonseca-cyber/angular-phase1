(function() {
    'use strict';
    angular.module('common', [])
        .constant('APIBasePath', 'https://coursera-jhu-default-rtdb.firebaseio.com')
        .config(config);
    config.$inject = ['$httpProvider'];

    function config($httpProvider) {
        $httpProvider.interceptors.push('loadingHttpInterceptor');
    }
})();
