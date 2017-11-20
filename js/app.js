"use strict";

(function() {
    angular.module ("petabl", [
            "ui.router",
            "ngResource",
            "ng-token-auth",
            "ipCookie",
            // "Devise",
            // "templates",
            "ngAnimate"
            // "meals"
        ])
        .config ([
            "$stateProvider",
            "$locationProvider",
            "$urlRouterProvider",
            "$authProvider",
            RouterFunction
        ])
        .config (function($authProvider) {
	          $authProvider.configure({
                  apiUrl: 'http://localhost:3000/api',
                  tokenValidationPath:     '/auth/validate_token',
                  signOutUrl:              '/auth/sign_out',
                  emailRegistrationPath:   '/auth',
                  accountUpdatePath:       '/auth',
                  accountDeletePath:       '/auth',
                  confirmationSuccessUrl:  window.location.href,
                  passwordResetPath:       '/auth/password',
                  passwordUpdatePath:      '/auth/password',
                  passwordResetSuccessUrl: window.location.href,
                  emailSignInPath:         '/auth/sign_in',
                  storage:                 'cookies',
                  forceValidateToken:      false,
                  validateOnPageLoad:      true,
                  proxyIf:                 function() { return false; },
                  proxyUrl:                '/proxy',
                  omniauthWindowType:      'sameWindow',
                  authProviderPaths: {
                    github:   '/auth/github',
                    facebook: '/auth/facebook',
                    google:   '/auth/google'
                  },
                  tokenFormat: {
                    "access-token": "{{ token }}",
                    "token-type":   "Bearer",
                    "client":       "{{ clientId }}",
                    "expiry":       "{{ expiry }}",
                    "uid":          "{{ uid }}"
                  },
                  cookieOps: {
                    path: "/",
                    expires: 9999,
                    expirationUnit: 'days',
                    secure: false,
                    domain: 'http://localhost:3000/api'
                  },
                  createPopup: function(url) {
                    return window.open(url, '_blank', 'closebuttoncaption=Cancel');
                  },
                  parseExpiry: function(headers) {
                    // convert from UTC ruby (seconds) to UTC js (milliseconds)
                    return (parseInt(headers['expiry']) * 1000) || null;
                  },
                  handleLoginResponse: function(response) {
                    return response.data;
                  },
                  handleAccountUpdateResponse: function(response) {
                    return response.data;
                  },
                  handleTokenValidationResponse: function(response) {
                    return response.data;
                  }
              })
          })
          .run(['$rootScope', '$location', function($rootScope, $location) {
              $rootScope.$on('auth:login-success', function() {
                  $location.path('/splash');
              });
          }]);


        function RouterFunction($stateProvider, $locationProvider, $urlRouterProvider) {
            $locationProvider.html5Mode(true)
            $stateProvider
                .state("Splash", {
                    url: "/",
                    templateUrl: "/js/splash.html",
                    controller: "SplashController",
                    controllerAs: "SplashViewModel"
                })
                .state("UserSessions", {
                    url: "/sign_in",
                    templateUrl: "/js/user_sessions/new.html",
                    controller: "UserSessionsController",
                    controllerAs: "UserSessionsViewModel"
                })
                .state("UserRegistrations", {
                    url: "/sign_up",
                    templateUrl: "/js/user_registrations/new.html",
                    controller: "UserRegistrationsController",
                    controllerAs: "UserRegistrationsViewModel"
                })
                .state("Pets",{
                    url: "/pets",
                    templateUrl: "/js/pets/pets.html",
                    controller: "PetsController",
                    controllerAs: "PetsViewModel"
                    // resolve: {
                    //     auth: function($auth) {
                    //         return $auth.validateUser();
                    //     }
                    // }
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
