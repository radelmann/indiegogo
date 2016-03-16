angular.module('indiegogo.services', [])

.factory('API', function($http) {

  var get = function(screenName) {
    return $http({
        method: 'GET',
        url: '/api/get/'
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
});