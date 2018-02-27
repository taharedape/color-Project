(function() {
    'use strict';

    colorProject.factory('manageService', manageService);

    manageService.$inject = ['$http', '$rootScope'];

    function manageService($http, $rootScope) {
       var service = {};
        var url='http://52.178..../api/';//default api



        service.getColors = getColors; 
        service.getAllTheColorNames =getAllTheColorNames; 
        

        return service;

         //get colors from JSON
        function getColors() {
            return $http.get('json/colors.json');
        }
        function getAllTheColorNames() {
            return $http.get('json/allTheColorNames.json');
        }


        // function setUserKey(requestObj) {
        //     requestObj.userKey = $rootScope.globals.userKey;
        // }

        function getUserKey() {
            return $rootScope.globals.userKey;
        }

        function handleSuccess(res) {
            return res.data;
        }

        function handleError(error) {
            return error.data;
            
        }
    }

})();
