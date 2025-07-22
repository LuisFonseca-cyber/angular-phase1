(function() {
    'use strict';
    angular.module('public')
        .component('menuItem', {
            templateUrl: 'src/public/menu-item/menu-item.html',
            bindings: {
                item: '<',
                categoryShortName: '<'
            },
            controller: MenuItemController
        });
    MenuItemController.$inject = ['APIBasePath'];

    function MenuItemController(APIBasePath) {
        console.log('MenuItemController initialized');
        var $ctrl = this;
        $ctrl.basePath = APIBasePath;
        console.log($ctrl.item);
        console.log($ctrl.categoryShortName);
    }
})();
