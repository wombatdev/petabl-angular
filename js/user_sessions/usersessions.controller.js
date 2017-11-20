
"use strict";

(function() {
    angular
        .module("petabl")
        .controller("UserSessionsController", [
            "$scope",
            "$state",
            "$rootScope",
            "$auth",
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
                    vm.user = resp;
                    // alert('Welcome ', vm.user.email, '!');
                    // $state.go("Splash", {id: vm.user.id});
            })
                .catch(function(resp) {
                    console.log("auth failure");
            });
        };

        $scope.$on('auth:login-error', function(ev, reason) {
            $scope.error = reason.errors[0];
        });

    }

// END OF IIFE
})();
