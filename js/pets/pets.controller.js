
"use strict";

(function() {
    angular
        .module("petabl")
        .controller("PetsController", [
            "PetFactory",
            PetsControllerFunction
        ])

    function PetsControllerFunction(PetFactory) {
        console.log("I'm in the pets controller!")
        var vm = this;
        vm.pets = PetFactory.query();

    }

// END OF IIFE
})();
