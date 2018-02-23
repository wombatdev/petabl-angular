
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

                    $scope.updateAccountForm = {
                        "firstname": $scope.registrationForm.firstname,
                        "lastname": $scope.registrationForm.lastname,
                        "phone1": $scope.registrationForm.phone1
                    }

                    // alert('Welcome ', vm.user.email, '!');
                }).then(function() {
                    console.log($scope.updateAccountForm);
                    $auth.updateAccount($scope.updateAccountForm).then(function(resp) {
                        console.log("update successful");
                    })
                    .catch(function(resp) {
                        console.log("update failed", resp);
                    });
                })
                .then(function() {
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
