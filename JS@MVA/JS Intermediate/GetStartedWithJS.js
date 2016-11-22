// Local variables are the ones that accessible only by the function
//Global variables are the ones that are accessible by any function or loops defined in
// code; Block-level variables are the ones that are defined inside the loops


// Global scope example
var color = "blue";

if(color){
	var color ="purple"; //this is a global variable, so color will be changed to 
	//purple
	console.log(color); //this statement will print purple
}

console.log(color); //this statement will print purple

//Local scope example

var color ="blue";

function printColor(){
	var color = "purple"; // this is a local variable
	console.log(color); // this is statement will print purple
}

printColor();
console.log(color); //this statement will print blue

// function example

var x = 3;

function numSquare(x){
	return x*x;
}

var sentence = "The square of" + x + "is equal to" + numSquare(x);

console.log(sentence);

var num = numSquare(6);
console.log(num);

// self invoking functions

((function selfPrint(){
	console.log("This function will print automatically print this statement");
})()) //Be sure to wrap the function in the parenthesis and add another pair of parentheses
// at the end of the function

//Enclosures & Example

// An enclosure is a function inside another function having access to local variables
// global variables and other function specific global variables and parameters

function showName(firstName, lastName){
	var nameIntro = "Your name is";

	function makeFullName(){ //This is an enclosure
		return nameIntro + firstName + "" + lastName;
	}

	return makeFullName();
}

///this will print your name is prince harshit 
console.log(showName("Prince","Harshit"));

//Being that enclosures have access to their outer functions variables and
//parameters, this allows the enclosures to be called later after the function returns
//and still be able to have access to function specific variables

//Enclosures only store references to outer function variable, not the actual variable
//themselves. This allows for variables to be updated at all times

function celebrityName(firstName){
	var nameIntro = "This celebrity is";

	function lastName(theLastName){
		console.log(nameIntro + firstName + " " + theLastName);
	}
	return lastName;
}

var myName = celebrityName("Harshit");
myName("Singh");

// Second Example
function theLocation(){
	var city ="San Fransisco";

	return{
		get: function() {
			console.log(city);
		}
		set: function(newCity){
			city = newCity;
		}
	}
}

var myPlace = theLocation();
myPlace.get();
myPlace.set("Oakland");
myPlace.get();

//Anonymous function

//The anonymous functions, are functions without names
//They are all dynamically declared at runtime
//They are used as function expression, in an object, as an event handler,
//as self evoking function
//These are most commonly used for recursions and enclosures


// named functions
function meTime(){
	alert("Go do something fun!");
}

//anonymous function
var meTime = function(){
	alert("Go do something fun!");
}

//Both functions can be invoked by calling meTime();

//What is the difference?

//So how these two are different well you can call a function at any point of time
// in a program but you can't call an anonymous function till the point the meTime
//variable is declared

//Example

//in function expression
var sayH1 = function(){
	alert("hello");
};

//in an object
var Pony = {
	sayName: function(){
		alert("My name is Pony");
	}
};

//in event handler
$("p").click = function(){
	alert("hello");
};

// in self invoking functions
((function(){
	alert("hello");
})());

//Recursion w/ Anonymous function example

//Because anonymous function don't have a name to call the function again we
//use the arguments.callee local variable.

// the function will calculate the factorial of any given number
var factorial = factorial(x){
	return !(n>1) ? 1 : arguments.callee(n-1)*n; 
} 

console.log(factorial(10));

//Errors and Exceptions
//Like many other programming languages the three errors that can be found in JS is

//Syntax, Runtime and Logical Errors

//Methods used for exception handling
//Try..catch..finally, 

/*The try block executes the code that is subjected to break; it must be followed
by either exactly on one catch block or one finally block or one of both; when
exception occurs the exception is passed on to the catch block


The catch block executes the code that should only be ran if exception is caught

The finally block is optional, but if included, it will always execute regardless
if an exception has occurred

Note: only programmer generated and runtime exceptions can be caught; syntax errors
will not be */

//Throw statement

/*Throw statement is used for customised exception; that is used to throw 
programmer-defined exception*/

function myFunc(){
	var a = 100;
	var b = 10;

	try{
		if(b == 0){
			throw("Divide by zero error");
		}
		else{
			var c = a/b;
			alert("c =" + c);
		}
	}

	catch(e){
		alert("Error:" + e);
	}

	finally{
		alert("finally block will always execute!");
	}
}


// onerror() method

/*The onerror() method is an event handler fired whenever an exception
occurs on the page

It is declared as a function through out the code

This event handler provides three pieces of information; an error message, 
the file in which error occurred, the line number in the code

The information can be manipulated to be displayed in any way that you like*/

// Onerror() method
<script type="text/javascript">
	window.onerror = function(msg,url,line){
	alert("Message :" + msg);
	alert("url :" + url);
	alert("line :" + line);
}
</script>