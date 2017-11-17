
"use strict";

(function(){
  angular
  .module ( "petabl" )
  .factory ( "PetFactory", [
    "$resource",
    PetFactoryFunction
  ]);

  function PetFactoryFunction ( $resource ) {
    return $resource( "http://localhost:3000/pets/:id.json", {}, {
      update: {method: "PUT"}
    })
  }


})();
