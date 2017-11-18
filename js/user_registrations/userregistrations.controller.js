
"use strict";

(function() {
    angular
        .module("petabl")
        .controller("UserRegistrationsController", [
            "$scope",
            UserRegistrationsControllerFunction
        ])

    function UserRegistrationsControllerFunction($scope) {
        console.log("I'm in the user registrations controller!")
        var vm = this;

    }

// END OF IIFE
})();
