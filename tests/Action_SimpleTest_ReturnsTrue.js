//Action_SimpleTest_ReturnsTrue.js: Testing logic.

define([
	"Action"
], function(
	Action
) {
	return {
		"Name":"Action_SimpleTest_ReturnsTrue",
		"Input": {
			"Input": undefined,
			"Function": function() {
				return true;
			}
		},
		"Function": Action,
		"ExpectedOutput": true
	};
});
