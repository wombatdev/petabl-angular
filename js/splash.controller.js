
"use strict";

(function() {
    angular
        .module("petabl")
        .controller("SplashController", [
            "$state",
            "$auth",
            "ipCookie",
            "$rootScope",
            SplashControllerFunction
        ])

    function SplashControllerFunction($state, $auth, ipCookie, $rootScope) {
        console.log("I'm in the splash controller!");

        var vm = this;
        var user = vm.user;
        // vm.user = $scope.user;
        // console.log(vm.user.id);



        vm.validate = function () {
            // if (vm.user.id) {
            //     console.log("signed in");
            // };
            console.log("click");
            $auth.validateUser().catch(function(err){
                console.info('not authenticated', err);
                $state.go('UserSessions');
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
