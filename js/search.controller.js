
"use strict";

(function() {
    angular
        .module("petabl")
        .controller("SearchController", [
            "$state",
            "$stateParams",
            "$scope",
            "SitterFactory",
            SearchControllerFunction
        ])

    function SearchControllerFunction($state, $stateParams, $scope, SitterFactory) {
        console.log("I'm in the search controller!");
        var vm = this;
        $scope.params = $stateParams;
        console.log($scope.params.visits);
        vm.allSitters = SitterFactory.query();
        // console.log(vm.allSitters);

        $scope.processForm = function (searchData) {
            console.log(searchData);
            $state.go("Search", {
                visits: searchData.visits,
                walking: searchData.walking,
                location: searchData.location,
                startDate: searchData.startDate,
                endDate: searchData.endDate
            });
        }

    }

// END OF IIFE
})();
