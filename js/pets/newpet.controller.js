
"use strict";

(function() {
    angular
        .module("petabl")
        .controller("NewPetController", [
            "PetFactory",
            "$state",
            "$stateParams",
            NewPetControllerFunction
        ])

    function NewPetControllerFunction (PetFactory, $state, $stateParams) {
        console.log("I'm in the new pet controller!")
        var vm = this;
        vm.pets = PetFactory.query();
        vm.newPet = new PetFactory();

        vm.create = function($state){
            console.log("test1");
            vm.newPet.$save().then(function(res) {
                vm.pets.push(res)
            })
        }

    }

// END OF IIFE
})();
