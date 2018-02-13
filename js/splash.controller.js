
"use strict";

(function() {
    angular
        .module("petabl")
        .controller("SplashController", [
            "$scope",
            "$auth",
            "ipCookie",
            SplashControllerFunction
        ])

    function SplashControllerFunction($scope, $auth, $ipCookie) {
        console.log("I'm in the splash controller!");

        var vm = this;
        vm.user = $scope.user;
        console.log(vm.user.id);
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
