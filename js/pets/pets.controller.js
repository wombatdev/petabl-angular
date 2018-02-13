
"use strict";

(function() {
    angular
        .module("petabl")
        .controller("PetsController", [
            "$scope",
            "PetFactory",
            PetsControllerFunction
        ])

    function PetsControllerFunction($scope, PetFactory) {
        console.log("I'm in the pets controller!")
        var vm = this;
        vm.pets = PetFactory.query();
        vm.user = $scope.user;
        console.log(vm.user.id);

    }

// END OF IIFE
})();
