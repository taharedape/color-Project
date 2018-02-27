(function() {
    'use strict';

    colorProject.factory('commonService', commonService);

    commonService.$inject = ['$http', '$rootScope', '$q'];

    function commonService($http, $rootScope, $q) {
        var service = {};
        var url = 'http://52.178../api/'; //default api


        service.noResponse = noResponse;


        return service;

        
        //If no response / cannot reach back end
        function noResponse() {
            // var message = ngToast.create({
            //     className: 'primary',
            //     content: 'Sorry, we are unable to reach our server, please try again in a few minutes.',
            //     //dismissButton : true,
            //     //dismissOnTimeout: false
            // });
            // return message;
        }

        


        // function setUserKey(requestObj) {
        //     requestObj.userKey = $rootScope.globals.userKey;
        // }

        // function getUserKey() {
        //     return $rootScope.globals.userKey;
        // }

        function handleSuccess(res) {
            var deferred = $q.defer();

            deferred.resolve(res);
            console.log("RESOLVED " + res.data);
            return deferred.promise.$$state.value.data;
            // return res.data;

        }

        function handleError(error) {
            return error.data;

        }
    }
   


})();
