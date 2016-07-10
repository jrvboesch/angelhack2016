(function() {
  'use strict';

  angular
    .module('core')
    .controller('VolunteerController', VolunteerController);

  VolunteerController.$inject = ['$scope','$http'];

  function VolunteerController( $scope, $http ) {
    var vm = this;
    // Volunteer controller logic
    // ...

    init();

    function init() {
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
                              "organization":"COPA",
                              "role":"Voluntary",
                              "cause":"Social",
                              "created":"2015-05-06",
                              "description":"Something"
                            }]
        };

      $http.post("http://7da8bac7.ngrok.io/MedicProject/crunchify/authenticate/register/",user)
          .then(function(data){
            console.log(data);
          },function(error){
            console.log(error);
          });
    }
  }
})();
