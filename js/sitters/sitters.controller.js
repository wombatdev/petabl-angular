
"use strict";

(function() {
    angular
        .module("petabl")
        .controller("SittersController", [
            "SitterFactory",
            SittersControllerFunction
        ])

    function SittersControllerFunction(SitterFactory) {
        console.log("I'm in the sitters controller!")
        var vm = this;
        vm.sitters = SitterFactory.query();

    }

// END OF IIFE
})();
