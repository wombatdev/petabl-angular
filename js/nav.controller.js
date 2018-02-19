
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
                    SitterFactory.getUser({user_id: $rootScope.user.id}).$promise.then(function(response) {
                        vm.sitter = response;
                        console.log(vm.sitter);
                        return vm.sitter;
                    })
                    .catch(function(err){
                        console.log($rootScope.user);
                        console.info('not a sitter', err);
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
