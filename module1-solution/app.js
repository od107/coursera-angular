(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.input = "";
  $scope.message = "";

  $scope.displayResult = function () {
    if($scope.input === ""){
      $scope.message="Please enter data first";
    }
    else if (calculateNbrOfItems($scope.input)<4) {
      $scope.message="Enjoy!";
    }
    else {
      $scope.message="Too much!";
    }
  };

  function calculateNbrOfItems(string) {
    var arrayOfStrings = $scope.input.split(",");
    return arrayOfStrings.length;
  }

}

})();
