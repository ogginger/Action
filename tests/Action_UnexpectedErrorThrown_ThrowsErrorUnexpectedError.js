//Action_UnexpectedError_ThrowsErrorUnexpectedError.js: Testing logic.

define([
	"Action"
], function(
	Action
) {
	return {
		"Name":"Action_UnexpectedError_ThrowsErrorUnexpectedError",
		"Input": {
			"Input": undefined,
			"Function": function() {
				throw { "Message": "Error" };
			}
		},
		"Function": function( Input ) {
			var bResult = false;
			try {
				Input.Function( Input.Inpupt );
			} catch( Error ) {
				if ( Error.Message === "Error" ) {
					bResult = true;
				}
			} finally {
				return bResult;
			}
		},
		"ExpectedOutput": true
	};
});
