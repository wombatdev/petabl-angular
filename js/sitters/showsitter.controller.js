
"use strict";

(function() {
    angular
        .module("petabl")
        .controller("ShowSitterController", [
            "SitterFactory",
            "$stateParams",
            ShowSitterControllerFunction
        ])

    function ShowSitterControllerFunction(SitterFactory, $stateParams) {
        console.log("I'm in the show sitter controller!")
        var vm = this;
        SitterFactory.get({id: $stateParams.id}).$promise.then(function(response) {
            vm.sitter = response;
            console.log(vm.sitter);
        });

    }

// END OF IIFE
})();
