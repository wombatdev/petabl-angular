
"use strict";

(function(){
  angular
  .module ( "petabl" )
  .factory ( "VisitFactory", [
    "$resource",
    VisitFactoryFunction
  ]);

  function VisitFactoryFunction ( $resource ) {
    return $resource( "http://localhost:3000/visits/:id.json", {}, {
      update: {method: "PUT"}
    })
  }


})();
