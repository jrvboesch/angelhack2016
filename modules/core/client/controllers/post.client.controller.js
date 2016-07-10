(function() {
  'use strict';

  angular
    .module('core')
    .controller('PostController', PostController);

  PostController.$inject = ['$scope', '$http'];

  function PostController($scope, $http) {
    var vm = this;

    // Post controller logic
    // ...

    init();

    function init() {
      
    }
  }
})();
