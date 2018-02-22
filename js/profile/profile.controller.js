
"use strict";

(function() {
    angular
        .module("petabl")
        .controller("ProfileController", [
            "$stateParams",
            ProfileControllerFunction
        ])

    function ProfileControllerFunction($stateParams) {
        console.log("I'm in the profile controller!")
        var vm = this;


    }

// END OF IIFE
})();
