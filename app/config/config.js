colorProject
.config(function($stateProvider, $urlRouterProvider, $httpProvider, $provide) {
  

  $urlRouterProvider.otherwise("/default/main");

  $stateProvider

            // ------------------------------
            // Default page load  
            // ------------------------------
            .state('default', {
             url: '/default',
             templateUrl: 'views/default.html'
           })
            // ------------------------------
            // main page load  
            // ------------------------------
            .state('default.main', {
             url: '/main',
             templateUrl: 'views/main.html'
           })
            // ------------------------------
            // Manage page load  
            // ------------------------------
             .state('default.manage', {
             url: '/manage',
             templateUrl: 'views/manage.html',
             controller: 'manageCtrl'
           })

           



          });









