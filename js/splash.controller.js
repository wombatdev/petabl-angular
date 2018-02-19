
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

        // SitterFactory.getUser({user_id: vm.user.id}).$promise.then(function(response) {
        //     vm.sitter = response;
        //     console.log(vm.sitter);
        //     return vm.sitter;
        // })
        // .catch(function(err){
        //     console.info('not a sitter', err);
        // });

        vm.sitterCheck = function () {
            console.log(vm.user.id);
            // vm.sitters = SitterFactory.query();
            SitterFactory.getUser({user_id: vm.user.id}).$promise.then(function(response) {
                vm.sitter = response;
                console.log(vm.sitter);
                return vm.sitter;
            })
            .catch(function(err){
                console.info('not a sitter', err);
            });
        };


        vm.validate = function () {
            console.log("click");
            $auth.validateUser().catch(function(err){
                console.info('not authenticated', err);
                $state.go('UserSessions');
            });
            console.log(vm.user.id);
            console.log("end");
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
