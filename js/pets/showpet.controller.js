
"use strict";

(function() {
    angular
        .module("petabl")
        .controller("ShowPetController", [
            "PetFactory",
            "$stateParams",
            ShowPetControllerFunction
        ])

    function ShowPetControllerFunction(PetFactory, $stateParams) {
        console.log("I'm in the show pet controller!")
        var vm = this;
        PetFactory.get({id: $stateParams.id}).$promise.then(function(response) {
            vm.pet = response;
            console.log(vm.pet);
        });

    }

// END OF IIFE
})();
