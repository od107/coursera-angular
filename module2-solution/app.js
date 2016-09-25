(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyShoppingController', ToBuyShoppingController)
.controller('AlreadyBoughtShoppingController',AlreadyBoughtShoppingController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];
// ShoppingListCheckOffService.$inject = ['$scope'];

function ToBuyShoppingController(ShoppingListCheckOffService) {
  var buyList = this;
  buyList.items = ShoppingListCheckOffService.getBuyList();
  // [{ name: "cookies", quantity: 10 },
  //                     { name: "milk", quantity: 4 },
  //                     { name: "butter", quantity: 1 },
  //                     { name: "spread", quantity: 5 },
  //                     // { name: "TP", quantity: 24 },
  //                     { name: "pizza", quantity: 2 }];

  buyList.isEmpty = function() {
    return ShoppingListCheckOffService.getBuyList().length === 0;
  }

  buyList.buy = function(item,index) {
    ShoppingListCheckOffService.buy(item, index);
    console.log(item);
    console.log(index);
  }
};

function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {
 var boughtList = this;

 boughtList.items = ShoppingListCheckOffService.getBoughtList();

 boughtList.isEmpty = function() {
   return ShoppingListCheckOffService.getBoughtList().length === 0;
 }
};

function ShoppingListCheckOffService() {
  var service = this;

  var buyList = [{ name: "cookies", quantity: 10 },
                      { name: "milk", quantity: 4 },
                      { name: "butter", quantity: 1 },
                      { name: "spread", quantity: 5 },
                      { name: "TP", quantity: 24 },
                      { name: "pizza", quantity: 2 }];

  var boughtList = [];

  service.getBuyList = function () {
    return buyList;
  };

  service.getBoughtList = function(){
    return boughtList;
  };

  service.buy = function (item, itemindex) {
    boughtList.push(item);
    buyList.splice(itemindex,1);
  };

}

})();
