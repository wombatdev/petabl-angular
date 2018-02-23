
"use strict";

(function() {
    angular
        .module("petabl")
        .controller("ProfileController", [
            "$stateParams",
            "$scope",
            "$auth",
            ProfileControllerFunction
        ])

    function ProfileControllerFunction($stateParams, $scope, $auth) {
        console.log("I'm in the profile controller!")
        var vm = this;
        console.log($scope.user.id);
        // vm.handleRegBtnClick = function() {
        //     $auth.updateAccount($scope.profileForm).then(function(resp) {
        //         console.log("update successful");
        //     })
        //     .catch(function(resp) {
        //         console.log("update failed", resp);
        //     });
        // };
    }

// END OF IIFE
})();
