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
    $stateProvider.state('addExpense', {
         url: '/addExpense',
         templateUrl: 'js/expenses/add/addExpense.html',
         controller: 'AddExpenseCtrl',
         controllerAs: 'vm'
    });
    $stateProvider.state('addCategory', {
         url: '/addCategory',
         templateUrl: 'js/categories/add/addCategory.html',
         controller: 'AddCategoryCtrl',
         controllerAs: 'vm'
    });

    $urlRouterProvider.otherwise('/');
  }

})();
