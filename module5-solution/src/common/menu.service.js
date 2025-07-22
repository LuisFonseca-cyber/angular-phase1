(function() {
    'use strict';
    angular.module('common')
        .service('MenuService', MenuService);
    MenuService.$inject = ['$http', 'APIBasePath'];

    function MenuService($http, APIBasePath) {
        var service = this;
        service.getCategories = function() {
            return $http.get(APIBasePath + '/categories.json').then(function(response) {
                return response.data;
            });
        };
        service.getMenuItems = function(category) {
            var config = {};
            if (category) {
                config.params = {
                    'category': category
                };
            }
            return $http.get(APIBasePath + '/menu_items/' + category + '.json')
                .then(function(response) {
                    console.log(response.data)
                    return response.data;
                });
        };
    }
})();
