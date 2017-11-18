
"use strict";

(function(){
  angular
  .module ( "petabl" )
  .factory ( "UserFactory", [
    "$resource",
    UserFactoryFunction
  ]);

  function UserFactoryFunction ( $resource ) {
    return $resource( "http://localhost:3000/users/:id.json", {}, {
      update: {method: "PUT"}
    })
  }


})();
