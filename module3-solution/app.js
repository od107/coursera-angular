(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', FoundItemsDirective);

function FoundItemsDirective() {
  var ddo = {
    templateUrl: 'foundItems.html',
    scope: {
      found: '<',
      onRemove: '&'
    },
    controller: NarrowItDownController,
    controllerAs: 'list',
    bindToController: true
  };
  return ddo;
}

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var list = this;
  // list.searchTerm ="";
  var promise = MenuSearchService.getMatchedMenuItems(list.searchTerm);

  // list.items = menuItems.getMatchedMenuItems(list.searchTerm);

}

MenuSearchService.$inject = ['$http']
function MenuSearchService($http) {
  var service = this;

  service.getMatchedMenuItems = function(searchTerm) {

    var response = $http({
      method: "GET",
      url: ("https://davids-restaurant.herokuapp.com/menu_items.json")
    });
    return response;
    // .then(function(result)) {
    //   // process result and only keep items that match
    //   var foundItems = result;
    //   console.log('result');
    //
    //   // return processed items
    //   return foundItems;
    // }

  }


}



})();
