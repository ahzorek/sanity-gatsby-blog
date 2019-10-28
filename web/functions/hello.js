//hello.js

exports.handler = function (event, context, callback){
	console.log(process.env)
	callback( null, {
		statusCode: 200,
		body: "Hello from my function, again.",
	})
}