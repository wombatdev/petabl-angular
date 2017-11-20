
"use strict";

(function() {
    angular
        .module("petabl")
        .controller("UserRegistrationsController", [
            "$scope",
            "$auth",
            UserRegistrationsControllerFunction
        ])

    function UserRegistrationsControllerFunction($scope, $auth) {
        console.log("I'm in the user registrations controller!")
        var vm = this;

        $scope.$on('auth:registration-email-error', function(ev, reason) {
            $scope.error = reason.errors[0];
        });

        vm.handleRegBtnClick = function(registrationForm) {
            $auth.submitRegistration($scope.registrationForm)
                .then(function(resp) {
                    console.log("auth success");
                    vm.user = resp;
                    // alert('Welcome ', vm.user.email, '!');
                }).then(function() {
                $auth.submitLogin({
                    email: $scope.registrationForm.email,
                    password: $scope.registrationForm.password
                });
            }).catch(function(resp) {
                console.log("auth failure");
            })
        };

    }

// END OF IIFE
})();
