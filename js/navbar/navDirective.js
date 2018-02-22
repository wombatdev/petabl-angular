angular
  .module('petabl')
  .directive('navBar', function NavBar(){
    return {
      templateUrl: '/js/navbar/nav.html',
      controller: 'NavController'
    }
})
