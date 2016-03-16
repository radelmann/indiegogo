angular.module('indiegogo.api', [])
  .controller('apiController', function($scope, API) {
    $scope.data = {};
    $scope.data.items = [];

    API.get().then(function(data) {
      console.dir(data);
      $scope.data.items = data;
    });
  });