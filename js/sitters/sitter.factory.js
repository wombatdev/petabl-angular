
"use strict";

(function(){
  angular
  .module ( "petabl" )
  .factory ( "SitterFactory", [
    "$resource",
    SitterFactoryFunction
  ]);

  function SitterFactoryFunction ( $resource ) {
    return $resource( "http://localhost:3000/sitters/:id.json", {}, {
      update: {method: "PUT"}
    })
  }


})();
