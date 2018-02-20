"use strict";

(function() {

    angular.module ("petabl", [
            "ui.router",
            "ngAnimate",
            "ngResource",
            "ipCookie",
            "ng-token-auth"
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
                    secure: false
                    // domain: 'http://localhost:3000/api'
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

            //filter name searchFilter
            .filter('searchFilter',[function(){
                /** @data is the original data**/
                /** @visits is the search query for visits**/
                /** @walking is the search query for walking**/
                return function (data,visits,walking) {
                    var output = []; // store result in this
                    console.log(data);
                    console.log(visits, walking);
                    //loop over the original array
                    for (var i = 0; i<data.length; i++) {
                        console.log(data[i]);
                        // check if any result matching the search request
                        if (data[i].does_visits == visits || data[i].does_walking == walking) {
                            console.log(i, " match");
                            //push data into results array
                            output.push(data[i]);
                        } else {
                            /**@case no query is present**/
                            console.log(i, " no match");
                        }
                    }
                    console.log(output);
                    return output; // finally return the result
                }
            }])


          .run(['$rootScope', '$location', function($rootScope, $location) {
              $rootScope.$on('auth:login-success', function() {
                  $rootScope.$broadcast('userLoggedIn');
                  $location.path('/');
              });
              $rootScope.$on('auth:logout-success', function(ev) {
                  $rootScope.$broadcast('userLoggedIn');
              });
              $rootScope.$on('auth:validation-success', function(ev) {
                  $rootScope.$broadcast('userLoggedIn');
              });
              $rootScope.$on('auth:invalid', function(ev) {
                  console.log('Not signed in.');
                //   $location.path('/sign_in');
              });
              $rootScope.$on('auth:session-expired', function(ev) {
                  alert('Session has expired');
              });
          }]);


        function RouterFunction($stateProvider, $locationProvider, $urlRouterProvider, $auth) {
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
                .state("Sitters",{
                    templateUrl: "/js/sitters/sitters.html",
                    abstract: true,
                    resolve: {
                        auth: function($auth) {
                            return $auth.validateUser();
                        }
                    }
                })
                    .state("Sitters.NewSitter",{
                        url: "/newsitter",
                        templateUrl: "/js/sitters/newsitter.html",
                        controller: "NewSitterController",
                        controllerAs: "NewSitterViewModel",
                        parent: "Sitters"
                    })
                        .state("Sitters.NewSitter.profile",{
                            url: "/profile",
                            templateUrl: "/js/sitters/newsitter-profile.html",
                        })
                        .state("Sitters.NewSitter.services",{
                            url: "/services",
                            templateUrl: "/js/sitters/newsitter-services.html",
                        })
                        .state("Sitters.NewSitter.servicedetails",{
                            url: "/details",
                            templateUrl: "/js/sitters/newsitter-servicedetails.html",
                        })
                .state("Search",{
                    url: "/search",
                    templateUrl: "/js/search.html",
                    controller: "SearchController",
                    controllerAs: "SearchViewModel",
                    params: {
                        "visits": null,
                        "walking": null,
                        "location": null,
                        "startDate": null,
                        "endDate": null
                    }
                })
                .state("ShowSitter",{
                    url: "/sitters/:id",
                    templateUrl: "/js/sitters/showsitter.html",
                    controller: "ShowSitterController",
                    controllerAs: "ShowSitterViewModel",
                    params: {
                        "id": null
                    }
                })
                .state("Services",{
                    templateUrl: "/js/services/services.html",
                    abstract: true,
                    resolve: {
                        auth: function($auth) {
                            return $auth.validateUser();
                        }
                    }
                })
                .state("Services.NewVisit",{
                    url: "/newvisit",
                    templateUrl: "/js/services/newvisit.html",
                    controller: "NewVisitController",
                    controllerAs: "NewVisitViewModel",
                    parent: "Services"
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

            $urlRouterProvider.otherwise("/")
        }



// END OF IIFE
})();
