(function (){
    angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope']
    function LunchCheckController($scope){
        $scope.menu = '';
        $scope.message = '';

        $scope.checkMenu = function(){
            var arr = $scope.menu.split(',');
            arr = arr.filter(str => str.trim() !== '');
            arr.length > 0 ? (arr.length <= 3 ? $scope.message="Enjoy!" : $scope.message="Too much!") : $scope.message="Please enter data first";
        }
    }
})();