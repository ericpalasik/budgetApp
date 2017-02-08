(function() {
  angular
    .module('budgetApp.addExpense')
    .controller('AddExpenseCtrl', addExpenseCtrl);

    addExpenseCtrl.$inject = ['Categories', 'Expenses', '$state'];

    function addExpenseCtrl(Categories, Expenses, $state) {
      var vm = this;

      vm.categories = Categories.getCategories();
      vm.saveExpense = saveExpense;

      vm.expenseToAdd = {
          description : '',
          amount : 0,
          category : ''
      }

      function saveExpense() {
        console.log(vm.expenseToAdd);
        Expenses.addExpense(vm.expenseToAdd);
        $state.go('home');
      }
    }
})();
