
"use strict";

(function() {
    angular
        .module("petabl")
        .controller("SplashController", [
            "$scope",
            "$auth",
            "ipCookie",
            "$rootScope",
            SplashControllerFunction
        ])

    function SplashControllerFunction($scope, $auth, ipCookie, $rootScope) {
        console.log("I'm in the splash controller!");

        var vm = this;
        vm.user = $scope.user;
        console.log(vm.user.id);

        $rootScope.$on('auth:logout-success', function(ev) {
            alert('logout success');
        });
        $rootScope.$on('auth:validation-success', function(ev) {
            alert('validation success');
        });
        $rootScope.$on('auth:login-success', function(ev) {
            alert('login success');
        });
        $rootScope.$on('auth:invalid', function(ev) {
            alert('invalid');
        });
        $scope.$on('auth:session-expired', function(ev) {
            alert('Session has expired');
        });

        vm.validate = function () {
            if (vm.user.id) {
                console.log("signed in");
            };
            console.log("click");
            $auth.validateUser()
                .then(function(resp) {
                    console.log(resp);
                });
        };

        vm.cookieCheck = function () {
            vm.cookies = ipCookie();
            console.log(vm.cookies);
        };

        // $auth.validateUser();

        // vm.signOut = function() {
        //     $auth.signOut()
        //     .then(function(resp) {
        //         console.log("success");
        //         // handle success response
        //     })
        //     .catch(function(resp) {
        //         console.log("fail");
        //         // handle error response
        //     });
        // };

    }

// END OF IIFE
})();
