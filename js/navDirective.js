angular
  .module('petabl')
  .directive('navBar', function NavBar(){
    return {
      templateUrl: '/js/nav.html',
      controller: 'NavController'
    }
})
