(function() {
    'use strict';
    angular.module('data')
        .service('MenuDataService', MenuDataService)
        .constant('APIBasePath', 'https://coursera-jhu-default-rtdb.firebaseio.com');
    MenuDataService.$inject = ['$http', 'APIBasePath'];

    function MenuDataService($http, APIBasePath) {
        var service = this;
        service.getAllCategories = function() {
            return $http({
                method: 'GET',
                url: (APIBasePath + '/categories.json')
            }).then(function success(result) {
                return result.data;
            }, function error(response) {
                throw new Error('Failed to fetch categories!');
            });
        };
        service.getItemsForCategory = function(categoryShortName) {
            return $http({
                method: 'GET',
                url: (APIBasePath + '/menu_items/' + categoryShortName + '.json')
            }).then(function success(result) {
                return result.data; 
            }, function error(response) {
                throw new Error('Fail to fetch details!');
            });
        };
    }
})();
