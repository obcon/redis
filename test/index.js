const redis = require("redis");
const sub = redis.createClient();
const pub = redis.createClient();
 
console.log("subscribe");
sub.on("subscribe", function (channel, count) {
	pub.publish("a nice channel", "I am sending a message.");
	pub.publish("a nice channel", "I am sending a second message.");
	pub.publish("a nice channel", "I am sending my last message.");
    });
 
sub.on("message", function (channel, message) {
	console.log("sub channel " + channel + ": " + message);
    });
 
sub.subscribe("a nice channel");

setTimeout(function() {
	console.log("unsubscribe and quit");
	sub.unsubscribe();
	sub.quit();
	pub.quit();
    },2000);