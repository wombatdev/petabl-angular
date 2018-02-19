
"use strict";

(function() {
    angular
        .module("petabl")
        .controller("SplashController", [
            "$state",
            "$auth",
            "ipCookie",
            "$rootScope",
            "SitterFactory",
            SplashControllerFunction
        ])

    function SplashControllerFunction($state, $auth, ipCookie, $scope, SitterFactory) {
        console.log("I'm in the splash controller!");

        var vm = this;
        vm.user = $scope.user;
        console.log(vm.user.id);


    }

// END OF IIFE
})();
