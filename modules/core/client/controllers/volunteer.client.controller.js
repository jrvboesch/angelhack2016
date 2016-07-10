(function() {
  'use strict';

  angular
    .module('core')
    .controller('VolunteerController', VolunteerController);

  VolunteerController.$inject = ['$scope','$http'];

  function VolunteerController($scope, $http) {
    var vm = this;
    // Volunteer controller logic
    // ...

    $scope.data = {
      countries: [],
      ocupancy: [],
      volunteer: [1]
    };

    init();

    function init() {
      
      $http.get('http://7da8bac7.ngrok.io/MedicProject/crunchify/countries')
          .then(function(data){
            $scope.data.countries = data.data.results.countries;
          },function(error){
            console.log(error);
          });

      $http.get('http://7da8bac7.ngrok.io/MedicProject/crunchify/occupations')
          .then(function(data){
            $scope.data.ocupancy = data.data.results.occupations;
          },function(error){
            console.log(error);
          });
    }

    $scope.register = function(){
      var user = {
        'name':'bobmark', 
        'pwd':'12345678', 
        'phone':'504102501', 
        'email':'bobMark1@gmail.com', 
        'address':'thidress', 
        'city':'sps', 
        'country':'hn', 
        'occupation':'Doctor', 
        'volunteerExperience':[{
          'organization':'COPA',
          'role':'Voluntary',
          'cause':'Social',
          'created':'2015-05-06',
          'description':'Something'
        }]
      };

      $http.post('http://7da8bac7.ngrok.io/MedicProject/crunchify/authenticate/register/',user)
          .then(function(data){
            console.log(data);
          },function(error){
            console.log(error);
          });
    };
    $scope.addVolunteer = function(){
      var len = $scope.data.volunteer.length;
      if(len === 3){
        alert('To keep it simple we just need a max of 3 life experience.');
        return false;
      }
      $scope.data.volunteer.push(len+1);
    };
  }
})();
