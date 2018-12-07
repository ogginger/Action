//Action.js: Functional Logic.

define([
	"log"
], function(
	log
) {
  return function( Input ) {
	try {
		Input.Result = Input.Function( Input.Input );
	} catch( Error ) {
		if ( Input.ExceptionTest ) {
			Input.Comparator = { "Object": true };
			Input.Result = Error;
		} else {
			log(JSON.stringify( Error ));
			throw { "Message": "UnexpectedError" };
		}
	} finally {
		return Input.Result;
	}
  };
});
