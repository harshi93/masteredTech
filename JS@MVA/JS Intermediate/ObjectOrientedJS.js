//Creating Objects

/* there are two ways of creating objects in javascript either by using object literal
or by using object constructor

Using Object literals
With this method, you simply initialize all the properties of the object within the
brackets; the properties are separated by commas*/

// Example Object Literal
var myGrades = {}; //this is how object is defined

var collegeAlegbra = {
	level: "freshman",
	difficulty: "hard",
	expectedGrade: 98,

	textbook: function(){
		console.log("College Algebra for Freshman is the required text");
	}
}


/*Using Object constructor
With this method you instantiate the object by calling the object constructor;
properties are added using dot notation
*/

//Example for Object constructor
var collegeAlg = new Object;
collegeAlg.level = "freshman";
collegeAlg.textbook = function(){
	console.log("College Alg for Freshman is the required text");
	
	or

	collegeAlg["textbook"] = function(){
		console.log("College Alg for Freshman is the required text")
	}
}


//This is how you call an object 
console.log(collegeAlgebra);
console.log(collegeAlg);
collegeAlgebra.textbook();
collegeAlg.textbook();


//Dot and Bracket Notation

/*Dot Notation
Using a period between the object name and property

same example as just above

Bracket Notation
Using a bracket between the object name and property; additionally it allows us to 
access a property through other variables

same example as above but just add a few lines as mentioned below

var idk = collegeAlg["textbook"];

note below mentioned either ways will call textbook function of collegeAlg
but first mentioned method will allow us to use bracket notation

We mostly use these methods to manipulate and change object properties*/


//Example of bracket notation
console.log(collegeAlg["idk"]);
  or
console.log(idk);


//Delete Properties

delete collegeAlg.level will delete property

//Please note that inherited property cannot be deleted without deleting the
// parent object or variable

//Constructors and the Prototypes Object

//the this keyword is used to refer current objects

function fruit(name,color){
	console.log("Object created by constructor");

	this.type =  function(){
		console.log("Hi i am fruit");
	}

	this.name = name;
	this.color = color;
}

var orange = new fruit("orange","orange");
orange.type();
console.log(orange)

//Inheritance

/*Every object has a prototype and every prototype is an object; all object inherit
properties and methods from their prototypes; prototyping is also an easy way to 
add properties and methods to objects that have already been instantiated*/

//The keyword is used to add methods and properties to the vegetable constructor

//Prototype example

var vegetable = function(){
	this.type = "Veggie";
}

vegetable.prototype.print = function(){
	console.log(this.type + "is good for you");
}

var carrots = new vegetable();

carrot.print();

vegetable.prototype.color ="wonderful color";

console.log(carrot.color);

// Complex example

var person = function(firstName){
	this.firstName = firstName;
};

person.prototype.sayHello = function(){
	console.log("Hello, I'm "+ this.firstName);
};

function student(firstName,subject){

	// call the parent constructor making sure that "this" is set correctly
	// during the call
	person.call(this, firstName);

	// to set subject for current object
	this.subject = subject;
};

//The line below allows us to alter attributes of person attributes
student.prototype = Object.create(person.prototype);

//Set the "constructor" property to refer to student; the line ensures
// that from this point of time whenever we will create a constructor
// the compiler doesn't get confuse with whether we are calling
// student constructor or person constructor
student.prototype.constructor = student;

//The line below overrides sayHello function from person method using 
// firstName from person and subject from student

student.prototype.sayHello =  function(){
	console.log("Hello I'm "+ this.firstName + "I'm studying" + this.subject +".");
};

//Example usage
var student1 = new student("Janet", "Applied Physics");
student1.sayHello(); 
//the output of this method will be Hello I'm Janet and I'm studying 

//Check that instanceof works correctly
console.log(student1 instanceof person);
console.log(student1 instanceof student);

//both should output true as response because student1 is instance of student which is
//instance of person and so that makes student1 be instance of person


//Encapsulation

/*Enclosures: for example, the enclosures in themselve have capability and even though
it is capable of accessing variable declared in outer function it really isn't aware
of all functionality available with outer functions

Constructors: for example, the student constructor calling person constructor doesn't 
actually knows everything available with person constructors and instead just
grabs what it needs */

// The In Operator: Will tell you if a property exists in an object

// The hasOwnProperty method: will tell you if a specific property is unique to an
//object

// for/in loop: To access all the properties in an object

//Example

var seafood ={small:"shrimp", big:"shark"};

console.log("small" in seafood); // the response would be true as it exists in seafood

console.log(seafood.hasOwnProperty("toString")); //false

for(var item in seafood){
    console.log(item); //prints the small and big seafood
}