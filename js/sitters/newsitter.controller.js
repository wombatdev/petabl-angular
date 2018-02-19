
"use strict";

(function() {
    angular
        .module("petabl")
        .controller("NewSitterController", [
            "SitterFactory",
            "$state",
            "$stateParams",
            "$scope",
            NewSitterControllerFunction
        ])

        function NewSitterControllerFunction (SitterFactory, $state, $stateParams, $scope) {
            console.log("I'm in the new sitter controller!")
            var vm = this;
            // var user = $scope.user;
            vm.user = $scope.user;
            vm.userid = $scope.user.id;
            console.log(vm.user.id);
            $scope.formData = {};


            vm.sitters = SitterFactory.query();
            // vm.new_sitter = new SitterFactory();


            $scope.processForm = function (formData) {
                console.log(formData);
                console.log(vm.user.id);
                vm.new_sitter = new SitterFactory();
                vm.new_sitter.user_id = vm.user.id;
                vm.new_sitter.firstname = formData.firstname;
                vm.new_sitter.lastname = formData.lastname;
                vm.new_sitter.address1 = formData.address1;
                vm.new_sitter.address2 = formData.address2;
                vm.new_sitter.city = formData.city;
                vm.new_sitter.state = formData.state;
                vm.new_sitter.zipcode = formData.zipcode;
                vm.new_sitter.phone1 = formData.phone1;

                vm.new_sitter.max_distance = formData.max_distance;
                vm.new_sitter.does_visits = formData.visits;
                vm.new_sitter.visit_rate = formData.visit_rate;
                vm.new_sitter.visit_max_occurences = formData.visit_max;
                // vm.new_sitter.visit_times_avail = formData.
                vm.new_sitter.does_walking = formData.walking;
                vm.new_sitter.walking_rate = formData.walking_rate;
                vm.new_sitter.walking_max_occurences = formData.walking_max;
                // vm.new_sitter.walking_times_avail = formData.

                vm.new_sitter.$save().then(function(res) {
                    vm.sitters.push(res);
                    console.log(vm.new_sitter.id);
                    vm.formData = {};
                    $state.go("Splash");
                })
            }

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
