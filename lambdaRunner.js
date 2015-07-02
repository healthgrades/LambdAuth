require('dotenv').load();
var argv = require('minimist')(process.argv.slice(2));
console.dir(argv);

var context = {
    succeed: function() {
        console.log('w00t I succeeded', arguments);
    },
    fail: function() {
       console.warn('Boo I failed', arguments);
    }
}

var event = require(argv.event);
var lambdaFunction = require(argv.lambdaFunction);

console.log("Execute Lambda Stub");
console.log(event);

lambdaFunction.handler(event, context);




