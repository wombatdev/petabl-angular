
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
            console.log(vm.user.id);

            vm.sitters = SitterFactory.query();
            // vm.new_sitter = new SitterFactory();


            vm.create = function (firstname, lastname, address1, address2, city, state, zipcode, phone1) {
                console.log(vm.user.id);
                vm.new_sitter = new SitterFactory();
                vm.new_sitter.user_id = vm.user.id;

                vm.new_sitter.firstname = firstname;
                vm.new_sitter.lastname = lastname;
                vm.new_sitter.address1 = address1;
                vm.new_sitter.address2 = address2;
                vm.new_sitter.city = city;
                vm.new_sitter.state = state;
                vm.new_sitter.zipcode = zipcode;
                vm.new_sitter.phone1 = phone1;
                vm.new_sitter.$save().then(function(res) {
                    vm.sitters.push(res);
                    console.log(vm.new_sitter.id);
                    vm.new_sitter = {};
                    $state.go("Sitters.SitterServices");
                })
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
