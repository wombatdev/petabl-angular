
"use strict";

(function() {
    angular
        .module("petabl")
        .controller("NewSitterController", [
            "SitterFactory",
            "$state",
            "$stateParams",
            NewSitterControllerFunction
        ])

        function NewSitterControllerFunction (SitterFactory, $state, $stateParams) {
            console.log("I'm in the new sitter controller!")
            var vm = this;
            vm.sitters = SitterFactory.query();
            vm.newSitter = new SitterFactory();

            vm.create = function($state){
                console.log("test1");
                vm.newSitter.$save().then(function(res) {
                    vm.sitters.push(res)
                })
            }

        }

// END OF IIFE
})();
