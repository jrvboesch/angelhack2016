'use strict';

angular.module('core').controller('HomeController', ['$scope', '$http', 'Authentication',
  function ($scope, $http, Authentication) {
    // This provides Authentication context.
    $scope.authentication = Authentication;
    $scope.data = {
		posts:[]
    };

    $http.get('http://7da8bac7.ngrok.io/MedicProject/crunchify/posts/read')
    .then(function(data){
		$scope.data.posts = data.data.results.posts;
    },function(error){
		console.log(error);
    });
  }
]);
