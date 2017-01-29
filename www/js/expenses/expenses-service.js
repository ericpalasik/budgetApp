(function() {
  angular
    .module('budgetApp.expenses')
    .service('Expenses', expenses);

    function expenses() {
    var expenses = [
            {
              description : 'Chipotle',
              amount : 10,
              category : 'fast food'
            },
            {
              description : 'Giant',
              amount : 100,
              category : 'groceries'
            },
            {
              description : 'Geico',
              amount : 120,
              category : 'insurance'
            }
          ]

      var service = {
        getExpenses : getExpenses,
        addExpense : addExpense
      }
      return service;



      function getExpenses() {
        return expenses;
      }

      function addExpense(expense) {
        expenses.push(expense);
      }
    }
})();
