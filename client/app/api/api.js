angular.module('indiegogo.api', [])
  .controller('apiController', ['$scope','API', function($scope, API) {
    $scope.data = {};
    $scope.data.items = [];

    API.get().then(function(data) {
      $scope.data.items = data;
    });
  }]);