
"use strict";

(function() {
    angular
        .module("petabl")
        .controller("SplashController", [
            SplashControllerFunction
        ])

    function SplashControllerFunction() {
        console.log("I'm in the splash controller!")
        var vm = this;

    }

// END OF IIFE
})();
