var app = angular.module('myApp', ['ui.bootstrap']);

app.controller('MainCtrl', function($scope) {
    $scope.name = 'gcosgreave';
});

angular.module('ui.bootstrap').controller('DropdownCtrl', function ($scope, $log) {

  $scope.status = {
    isopen: false
  };

  $scope.toggled = function(open) {
    $log.log('Dropdown is now: ', open);
  };

  $scope.toggleDropdown = function($event) {
    $event.preventDefault();
    $event.stopPropagation();
    $scope.status.isopen = !$scope.status.isopen;
  };
});