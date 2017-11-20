
"use strict";

(function() {
    angular
        .module("petabl")
        .controller("SplashController", [
            "$auth",
            SplashControllerFunction
        ])

    function SplashControllerFunction($auth) {
        console.log("I'm in the splash controller!")
        var vm = this;
        $auth.validateUser();


    }

// END OF IIFE
})();
