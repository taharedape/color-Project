(function() {
    'use strict';

    colorProject.controller('menuCtrl', menuCtrl);

    menuCtrl.$inject = ['$scope', '$rootScope', '$window', '$state', 'manageService'];

    function menuCtrl($scope, $rootScope, $window, $state, manageService) {

        
         $scope.onload = function() {
            var obj = {}
            manageService.getColors(obj).then(function(response) {
                if (response) {

                    if (response.status === 200) {
                        //defining the color globally so that it's available thorught the app (other mechanism might be utilized later on)
                         $rootScope.colors = response.data;

                    } else {

                        commonService.noResponse();
                    }
                } else {
                    commonService.noResponse();

                }
            });

        }
        
        $scope.selectColor = function(color){
            $scope.selectedColor = color.name;
        }


        // init
        $scope.onload();




    }

})();
