// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by meteor-accounts-shibboleth.js.
import { name as packageName } from "meteor/njwllace315:meteor-accounts-shibboleth";

// Write your tests here!
// Here is an example.
Tinytest.add('meteor-accounts-shibboleth - example', function (test) {
  test.equal(packageName, "meteor-accounts-shibboleth");
});
