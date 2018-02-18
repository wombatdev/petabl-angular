
"use strict";

(function() {
    angular
        .module("petabl")
        .controller("SitterServicesController", [
            "SitterFactory",
            "VisitFactory",
            "$scope",
            "$state",
            "$stateParams",
            SitterServicesControllerFunction
        ])

        function SitterServicesControllerFunction (SitterFactory, VisitFactory, $scope, $state, $stateParams) {
            console.log("I'm in the sitter services controller!")
            var vm = this;
            vm.userid = $scope.user.id;
            vm.sitters = SitterFactory.query();
            // vm.new_sitter = new SitterFactory();


            vm.selection = function (hosting, sitting, visits, walking) {
                if (visits != null) {
                    vm.visits = VisitFactory.query();
                    vm.new_visit = new VisitFactory();
                    vm.new_visit.sitter_id = vm.userid;
                    vm.new_visit.$save().then(function(res) {
                        vm.visits.push(res);
                        $state.go("Services.NewVisit");
                    });
                }
            }

            // vm.new_sitter.$save().then(function(res) {
            //     vm.sitters.push(res);
            //     vm.new_sitter = {};
            //     $state.go("Sitters.SitterServices");
            // })
            //     .catch(function(resp) {
            //         console.log("auth failure");
            // });



            // vm.create = function($state){
            //     console.log("test1");
            //     vm.newSitter.$save().then(function(res) {
            //         vm.sitters.push(res)
            //     })
            // }

        }

// END OF IIFE
})();
