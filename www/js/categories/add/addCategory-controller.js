(function() {
  angular
    .module('budgetApp.addCategory')
    .controller('AddCategoryCtrl', addCategoryCtrl);

    addCategoryCtrl.$inject = ['Categories', '$state'];

    function addCategoryCtrl(Categories, $state) {
      var vm = this;

      vm.getCategories = Categories.getCategories;
      vm.saveCategory = saveCategory;

      vm.categoryToAdd = '';

      function saveCategory() {
        console.log(vm.categoryToAdd);
        Categories.addCategory(vm.categoryToAdd);
        $state.go('home');
      }
    }
})();
