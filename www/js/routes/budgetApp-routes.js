(function() {
  angular
    .module('budgetApp.routes')
    .config(config);


  function config($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
         url: '/',
         templateUrl: 'js/home/home.html',
         controller: 'HomeCtrl',
         controllerAs: 'vm'
    });
     $stateProvider.state('add', {
          url: '/add',
          templateUrl: 'js/add/add.html',
          controller: 'AddCtrl',
          controllerAs: 'vm'
        });

    $urlRouterProvider.otherwise('/');
  }

})();
