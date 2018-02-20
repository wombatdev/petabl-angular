
"use strict";

(function() {
    angular
        .module("petabl")
        .controller("SplashController", [
            "$state",
            "$stateParams",
            "$scope",
            SplashControllerFunction
        ])

    function SplashControllerFunction($state, $stateParams, $scope) {
        console.log("I'm in the splash controller!");
        var vm = this;
        $scope.searchData = {};

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
