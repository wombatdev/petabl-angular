
"use strict";

(function() {
    angular
        .module("petabl")
        .controller("NewPetController", [
            "PetFactory",
            "$state",
            "$stateParams",
            "$scope",
            NewPetControllerFunction
        ])

    function NewPetControllerFunction (PetFactory, $state, $stateParams, $scope) {
        console.log("I'm in the new pet controller!")
        var vm = this;

        vm.user = $scope.user;
        vm.userid = $scope.user.id;
        console.log(vm.user.id);
        $scope.formData = {};

        vm.pets = PetFactory.query();

        $scope.processForm = function (formData) {
            console.log(formData);
            console.log(vm.user.id);
            vm.new_pet = new PetFactory();
            vm.new_pet.user_id = vm.user.id;
            vm.new_pet.species = formData.species;
            vm.new_pet.name = formData.name;
            vm.new_pet.weight = formData.weight;
            vm.new_pet.breed = formData.breed;
            vm.new_pet.age_years = formData.age_years;
            vm.new_pet.age_months = formData.age_months;
            vm.new_pet.sex = formData.sex;
            vm.new_pet.spayed = formData.spayed;
            vm.new_pet.housetrained = formData.housetrained;
            vm.new_pet.housetrained_info = formData.housetrained_info;
            vm.new_pet.chipped = formData.chipped;
            vm.new_pet.otherdogs = formData.otherdogs;
            vm.new_pet.otherdogs_info = formData.otherdogs_info;
            vm.new_pet.othercats = formData.othercats;
            vm.new_pet.othercats_info = formData.othercats_info;
            vm.new_pet.children = formData.children;
            vm.new_pet.children_info = formData.children_info;
            vm.new_pet.shed = formData.shed;
            vm.new_pet.shed_info = formData.shed_info;
            vm.new_pet.hypoallergenic = formData.hypoallergenic;
            vm.new_pet.hypoallergenic_info = formData.hypoallergenic_info;
            vm.new_pet.noise = formData.noise;
            vm.new_pet.noise_info = formData.noise_info;
            vm.new_pet.aggression = formData.aggression;
            vm.new_pet.aggression_info = formData.aggression_info;
            vm.new_pet.specialcare = formData.specialcare;
            vm.new_pet.vet = formData.vet;
            vm.new_pet.about = formData.about;
            vm.new_pet.instructions = formData.instructions;
            console.log(vm.new_pet);

            vm.new_pet.$save().then(function(res) {
                vm.pets.push(res);
                console.log(vm.new_pet.id);
                vm.formData = {};
                $state.go("Splash");
            })
            .catch(function(err) {
                console.log(err);
            })
        }


    }

// END OF IIFE
})();
