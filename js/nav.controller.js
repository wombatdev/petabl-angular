
"use strict";

(function() {
    angular
      .module('petabl')
      .controller('NavController', [
          "$state",
          "$auth",
          "$scope",
          "$rootScope",
          "SitterFactory",
          NavControllerFunction
      ])
      function NavControllerFunction($state, $auth, $scope, $rootScope, SitterFactory) {
        // $scope.signedIn = Auth.isAuthenticated;
        // $scope.logout = Auth.logout;
        var vm = this;
        $rootScope.$on('userLoggedIn', function () {
            vm.sitter = {};
            $auth.validateUser()
                .then(function(resp) {
                    vm.sitters = SitterFactory.query().$promise.then(function(response) {
                        vm.sitter = response.filter(function( obj ) {
                            return obj.user_id == $rootScope.user.id;
                        });
                        console.log(vm.sitter);
                        return vm.sitter? vm.sitter[0] : null;
                    })
                    .catch(function(err){
                        console.info('query failed', err);
                    });
                })
                .catch(function(err){
                    console.info('not authenticated', err);
                    console.log(vm.sitter.id);
                    // $state.go('UserSessions');
                });
            });
        // Auth.currentUser().then(function (user){
        //   $rootScope.user = user
        // });
        //
        // $scope.$on('devise:new-registration', function (e, user){
        //   $rootScope.user = user
        // });
        //
        // $scope.$on('devise:login', function (e, user){
        //   $rootScope.user = user
        // });
        //
        // $scope.$on('devise:logout', function (e, user){
        //   alert("You have been logged out.")
        //   $rootScope.user = undefined
        // });
      }


// END OF IIFE
}) ();
