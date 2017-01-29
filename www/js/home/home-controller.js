(function() {
  angular
    .module('budgetApp.home')
    .controller('HomeCtrl', homeCtrl);

    homeCtrl.$inject = ['Expenses'];

    function homeCtrl(Expenses) {
      var vm = this;

      vm.getExpenses = Expenses.getExpenses;
    }
})();
