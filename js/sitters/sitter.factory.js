
"use strict";

(function(){
  angular
  .module ( "petabl" )
  .factory ( "SitterFactory", [
    "$resource",
    SitterFactoryFunction
  ]);

  function SitterFactoryFunction ( $resource ) {
    return $resource( "http://localhost:3000/sitters/:id.json", {user_id: '@user_id'}, {
      get: {method: "GET", isArray: false, params: {user_id: '@user_id'}},
      update: {method: "PUT"},
      query: {method: "GET", isArray: true},
      getUser: {url: "http://localhost:3000/sitters/:id/:user_id", method: "GET", params: {id: "@id", user_id: "@user_id"}}
    })
  }


})();
