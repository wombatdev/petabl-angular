
"use strict";

(function() {
    angular
        .module("petabl")
        .controller("SigninController", [
            SigninControllerFunction
        ])

    function SigninControllerFunction() {
        console.log("I'm in the signin controller!")
        var vm = this;
        
    }

// END OF IIFE
})();
