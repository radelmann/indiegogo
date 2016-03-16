angular.module('twitterAPI.tweets', [])
  .controller('apiController', function($scope, API) {
    $scope.data = {};
    $scope.data.items = [];

    API.get().then(function(data) {
      $scope.data.items = data;
    });
  });