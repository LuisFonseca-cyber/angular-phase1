(function(){
    angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService){
        var list1 = this;
        list1.test = "test";

        list1.items = ShoppingListCheckOffService.getToBuyItems();
        
        list1.buyItem = function(index){
            ShoppingListCheckOffService.buyItem(index);
        }
    };

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService){
        var list2 = this;
        
        list2.items = ShoppingListCheckOffService.getAlreadyBoughtItems();
    }

    function ShoppingListCheckOffService(){
        var service  = this;
        
        var toBuyItems = [{quantity:10 , name:'cookies'}, {quantity:10 , name:'cookies'}];
        
        var alreadyBoughtItems = [];

        service.buyItem = function(index){
            alreadyBoughtItems.push(toBuyItems.splice(index, 1)[0]);
        }
        
        service.getAlreadyBoughtItems = function(){
            return alreadyBoughtItems;
        };
        
        service.getToBuyItems = function(){
            return toBuyItems;
        };
    };
})();