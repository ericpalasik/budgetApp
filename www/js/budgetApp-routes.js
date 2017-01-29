(function() {

  angular
    .module('budgetApp.routes')
    .config(config);


  function config($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
         url: '/',
         templateUrl: 'templates/home.html'
    });
     $stateProvider.state('create', {
          url: '/create',
          templateUrl: 'templates/create.html'
        });

    $urlRouterProvider.otherwise('/');
  }

})();
