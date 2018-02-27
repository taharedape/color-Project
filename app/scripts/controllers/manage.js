(function() {
    'use strict';

    colorProject.controller('manageCtrl', manageCtrl);

    manageCtrl.$inject = ['$scope', '$state', 'manageService', '$rootScope', '$stateParams'];

    function manageCtrl($scope, $state, manageService, $rootScope, $stateParams) {

        //initilization of params/objs
        $scope.newColor = {};
        var match; //checking if the color exists


        $scope.onload = function() {
            var obj = {}
            manageService.getColors(obj).then(function(response) {
                if (response) {

                    if (response.status === 200) {
                        $rootScope.colors = response.data;

                    } else {

                        commonService.noResponse();
                    }
                } else {
                    commonService.noResponse();

                }
            });

        }


        $scope.addNewColor = function() {

            //checking if the icon has the string of "glyphicon" as that represents bootstrap icons
            var iconCheck = $scope.newColor.iconClass.indexOf('glyphicon') != -1;
            if (iconCheck) {

                //checking if the color string is valid at all
                var obj = {}
                manageService.getAllTheColorNames(obj).then(function(response) {
                    if (response) {
                        if (response.status === 200) {
                            $scope.allTheColors = response.data;
                            angular.forEach($scope.allTheColors, function(c) {
                                if (c.name === $scope.newColor.name) {
                                    match = true;
                                    var newID = 1;

                                    if ($rootScope.colors.length) {
                                        newID = $rootScope.colors[$rootScope.colors.length - 1].id + 1;
                                    }

                                    var newData = {
                                        id: newID,
                                        name: $scope.newColor.name,
                                        description: $scope.newColor.description,
                                        iconClass: $scope.newColor.iconClass
                                    };

                                    $rootScope.colors.push(newData);
                                    return;
                                }

                            });

                            if (match) {
                                //if color is correct
                            } else {
                                alert('Sounds like the text you have entered is not a color!');
                            }

                        } else {
                            commonService.noResponse();
                        }
                    } else {
                        commonService.noResponse();
                    }
                });
            }else{
                alert('Sounds like the icon is not a bootstrap one!');

            }


        }

        $scope.removeColor = function(colorId) {
            // checking if color exists
            if (colorId) {
                $rootScope.colors.forEach(function(color) {
                    if (color.id === colorId) {
                        $rootScope.colors.splice($rootScope.colors.indexOf(color), 1);
                        return;
                    }
                });
            }
        }


        $scope.onload();








    }


})();