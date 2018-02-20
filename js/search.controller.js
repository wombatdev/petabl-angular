
"use strict";

(function() {
    angular
        .module("petabl")
        .controller("SearchController", [
            "$state",
            "$stateParams",
            "$scope",
            "SitterFactory",
            "$filter",
            SearchControllerFunction
        ])

    function SearchControllerFunction($state, $stateParams, $scope, SitterFactory, $filter) {
        console.log("I'm in the search controller!");
        var vm = this;
        $scope.params = $stateParams;
        console.log($scope.params.visits);

        SitterFactory.query().$promise.then(function (resp) {
            console.log(resp);
            vm.allSitters = resp;
            vm.sitters = $filter('searchFilter')(vm.allSitters, $scope.params.visits, $scope.params.walking);
                // startDate: ,
                // endDate:

            console.log(vm.sitters);
        });



        $scope.processForm = function (searchData) {
            console.log(searchData);
            SitterFactory.query().$promise.then(function (resp) {
                vm.allSitters = resp;
                vm.sitters = $filter('searchFilter')(vm.allSitters, searchData.visits, searchData.walking);
                    // startDate: ,
                    // endDate:
            });
        }

    }

// END OF IIFE
})();
