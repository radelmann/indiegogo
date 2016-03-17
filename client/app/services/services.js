angular.module('indiegogo.services', [])

.factory('API', ['$http', function($http) {

  var get = function(screenName) {
    return $http({
        method: 'GET',
        url: '/api/indiegogo/'
      })
      .then(function(resp) {
        return JSON.parse(resp.data).response;
      }, function(err) {
        return [];
      });
  };

  return {
    get: get
  };
}]);