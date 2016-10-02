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
      foundItems: '<',
      onRemove: '&'
    },
    controller: NarrowItDownController, //FoundItemsDirectiveController
    controllerAs: 'controller',
    bindToController: true
  };
  return ddo;
}

// function FoundItemsDirectiveController(){
//  var controller = this;
// }

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var controller = this;
  controller.searchTerm ="";
  controller.foundItems ="";

  controller.getMatchedMenuItems = function(searchTerm) {
    var promise = MenuSearchService.getMatchedMenuItems();
    promise.then(function(response){

      controller.foundItems = response.data.menu_items;
      // console.log(controller.foundItems);
    })
  }
  // .then(function(result)) {
  //   // process result and only keep items that match
  //   var foundItems = result;
  //   console.log('result');
  //
  //   // return processed items
  //   return foundItems;
  // }
  controller.removeItem = function(index){

    //to be implemented still
  }
}

MenuSearchService.$inject = ['$http']
function MenuSearchService($http) {
  var service = this;

  service.getMatchedMenuItems = function() {
    var response = $http({
      method: "GET",
      url: ("https://davids-restaurant.herokuapp.com/menu_items.json")
      });
    return response;
  }
}

})();
