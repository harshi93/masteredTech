//jQuery

/*jQuery is a lightweight, fast JS library aimed at achieving more by applying less
amount of effort and finds it applications in fields such as animation,
DOM manipulation and event handling

the this keyword is used when we are using jQuery within an html element to point to 
current element */

<script>
	// the line ensures that DOM is ready before elements are made available to user
	$(document).ready(function()
	{
		$("button").click(function()
		{
			var div= $("div")	
			div.animate({height: '300px', opacity: '0.4'}, "slow");
			$("div").fadeOut();
		})
	})
</script>

// Method Types

/*Event Methods: the actions that can cause the web page to respond you must pass a 
function through them in order to see the event occur. for example 
click a button
move over an element*/

/*Effect Methods: actions that cause to change elements on the page, for example
Hide, Show, Slide, Animate*/

//Require JS

// A framework used to load; JS files and modules

// Uses Asynchronous Module Definition to load files; Each module starts loading 
// through asynchronous requests in a given order
// Can be used with jQuery, Node.js and Dojo
// Require() and Define() are two important keyword of RequireJS; Require() is used 
// to utilize functionality and Define() is used to define functionality
 
 /*Modules are used to export a value, rather than to define a type; Modules in JS
 are small unit of reusable code; usually export object, functions or constructors;
 Modules usually belong to a package which is made of many different modules*/

 download RequireJS at requirejs.org

 /*so our project based on RequireJS will have three parts app folder lib folder and
 index.html*/

 // inside app folder

//main.js
	define(function(require){
		var messages = require('./messages');

		var print =  require('print');

		print(nessage.getHello());
	});	


//message.js

	define(function(){
		return{
			getHello: function(){
				return "Hello World";
			}
		};
	});

// inside lib folder

// print.js

	define(function(){
		return function print(msg){
			console.log(msg);
		};
	});

// require.js(this is the same file that is downloaded from server)

// app.js

	requirejs.config({
		baseUrl: 'lib',
		paths: {
			app: '../app'
		}
	});

	requirejs(['app/main']);

//index.html
<!DOCTYPE html>
<html>
	<head>
		<title>
			</title>
			<script data-main="app" src= "lib/require.js"></script>
		</head>
	<body>
		<h1>Hello World</h1>
	</body>
</html>

//microjs.oom

// Model-View-ViewModel
// A framework for automatically updating UI
// framework that can help in achieving this
// knockout, Ember, Angular, Backbone, React
// get familiarity with npmjs