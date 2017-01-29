(function() {
  angular
    .module('budgetApp.categories')
    .service('Categories', categories);

    function categories() {
    var categories = [
            'home',
            'car',
            'groceries',
            'insurance',
            'restaurants',
            'fast food'
          ]

      var service = {
        getCategories : getCategories
      }
      return service;



      function getCategories() {
        return categories;
      }
    }
})();
