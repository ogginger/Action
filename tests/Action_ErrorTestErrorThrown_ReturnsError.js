//Action_ErrorTestErrorThrown_ReturnsError.js: Testing logic.

define([
	"Action"
], function(
	Action
) {
	return {
		"Name":"Action_ErrorTestErrorThrown_ReturnsError",
		"Input": {
			"Input": undefined,
			"Function": function() {
				throw { "Message": "Error" };
			},
			"ExceptionTest": true
		},
		"Function": Action,
		"ExpectedOutput": { "Message": "Error" },
		"Debug": false,
		"Comparator": {
			"Object": true
		}
	};
});
