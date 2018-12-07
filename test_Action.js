//test_Action.js: Testing Logic.

define([
  "TestSuite",
  "log",
  "Action",
	"tests/Action_ErrorTestErrorThrown_ReturnsError",
	"tests/Action_SimpleTest_ReturnsTrue",
	"tests/Action_UnexpectedErrorThrown_ThrowsErrorUnexpectedError"
], function(
  TestSuite,
  log,
  Action,
	Action_ErrorTestErrorThrown_ReturnsError,
	Action_SimpleTest_ReturnsTrue,
	Action_UnexpectedErrorThrown_ThrowsErrorUnexpectedError
) {
  return TestSuite.extend({
    "initialize": function() {
      log("test_Action initialized successfully!");
      var xTestSuite = this;
      xTestSuite.set( "MethodUnderTest", "Action" );
	xTestSuite.add( Action_ErrorTestErrorThrown_ReturnsError );
	xTestSuite.add( Action_SimpleTest_ReturnsTrue );
	xTestSuite.add( Action_UnexpectedErrorThrown_ThrowsErrorUnexpectedError );
      xTestSuite.test();
    }
  });
});
