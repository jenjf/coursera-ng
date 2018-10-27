(function functionName() {
'use strict';

  angular.module('myFirstApp', [])

  .controller('MyFirstController', function functionName($scope) {

    $scope.name = "Jen";
    $scope.sayHello = function () {
      return "Hello Cherry!";
    };

  });

})();
