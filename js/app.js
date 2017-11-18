"use strict";

(function() {
    angular.module ("petabl", [
            "ui.router",
            "ngResource",
            "ng-token-auth",
            // "Devise",
            // "templates",
            "ngAnimate"
            // "meals"
        ])
        .config ([
            "$stateProvider",
            "$locationProvider",
            "$urlRouterProvider",
            RouterFunction
        ])

        function RouterFunction($stateProvider, $locationProvider, $urlRouterProvider) {
            $locationProvider.html5Mode(true)
            $stateProvider
                .state("Splash", {
                    url: "/",
                    templateUrl: "/js/splash.html",
                    controller: "SplashController",
                    controllerAs: "SplashViewModel"
                })
                .state("Signin", {
                    url: "/sign_in",
                    templateUrl: "/js/user_sessions/new.html",
                    controller: "SigninController",
                    controllerAs: "SigninViewModel"
                })
                .state("Pets",{
                    url: "/pets",
                    templateUrl: "/js/pets/pets.html",
                    controller: "PetsController",
                    controllerAs: "PetsViewModel"
                })
                .state("ShowPet",{
                    url: "/pets/:id",
                    templateUrl: "/js/pets/showpet.html",
                    controller: "ShowPetController",
                    controllerAs: "ShowPetViewModel"
                })
                .state("NewPet",{
                    url: "/newpet",
                    templateUrl: "/js/pets/newpet.html",
                    controller: "NewPetController",
                    controllerAs: "NewPetViewModel"
                })
                .state("Sitters",{
                    url: "/sitters",
                    templateUrl: "/js/sitters/sitters.html",
                    controller: "SittersController",
                    controllerAs: "SittersViewModel"
                })
                .state("ShowSitter",{
                    url: "/sitters/:id",
                    templateUrl: "/js/pets/showsitter.html",
                    controller: "ShowSitterController",
                    controllerAs: "ShowSitterViewModel"
                })
                .state("NewSitter",{
                    url: "/newsitter",
                    templateUrl: "/js/sitters/newsitter.html",
                    controller: "NewSitterController",
                    controllerAs: "NewSitterViewModel"
                })
                // .state("Signin",{
                //     url:"/signin",
                //     templateUrl:"/js/chefs/signin.html",
                //     controller: "SigninController",
                //     controllerAs: "SigninViewModel",
                //     onEnter: function(Auth, $state){
                //         Auth.currentUser().then(function(){
                //             $state.go('Home')
                //         })
                //     }
                // })
                // .state("Signup",{
                //     url:"/signup",
                //     templateUrl:"/js/chefs/signup.html",
                //     controller: "SigninController",
                //     controllerAs: "SigninViewModel",
                //     onEnter: function(Auth, $state){
                //         Auth.currentUser().then(function(){
                //             $state.go('Home')
                //         })
                //     }
                // })
            $urlRouterProvider.otherwise("/")
        }

// END OF IIFE
})();
