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
        getCategories : getCategories,
        addCategory : addCategory
      }
      return service;



      function getCategories() {
        return categories;
      }

      function addCategory(category) {
        categories.push(category);
      }
    }
})();
