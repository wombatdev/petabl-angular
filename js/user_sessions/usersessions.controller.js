
"use strict";

(function() {
    angular
        .module("petabl")
        .controller("UserSessionsController", [
            "$scope",
            "$state",
            "$rootScope",
            "$auth",
            "ipCookie",
            UserSessionsControllerFunction
        ])

    function UserSessionsControllerFunction($scope, $state, $rootScope, $auth) {
        console.log("I'm in the user sessions controller!")
        var vm = this;

        vm.formSubmit = function(loginForm) {
            console.log($scope.loginForm);
            $auth.submitLogin($scope.loginForm)
                .then(function(resp) {
                    console.log("auth success");
                    console.log(resp);
                    console.log($auth.validateUser());
            })
                .catch(function(resp) {
                    console.log("auth failure");
            });
        };

        $scope.$on('auth:login-error', function(ev, reason) {
            $scope.error = reason.errors[0];
        });

        $scope.handleBtnClick = function() {
            $auth.authenticate('github')
            .then(function(resp) {
          // handle success
            })
            .catch(function(resp) {
          // handle errors
        });
    };

    }

// END OF IIFE
})();
