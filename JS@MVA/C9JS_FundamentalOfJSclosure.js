$(function(){

	function buildACat(){
		var catName = "Mr.Tibbles";
		function catFactory(){
			alert(catName);
		}
		catFactory();
	}

	$('#buildcat').click(function(){
		buildACat();
	});
});

$(function(){
	function buildACat() {
		var catName = "Tuffy";
		function catFactory(){
			alert(catName);
		} 
		//please remember that here you are just referencing the catFactory 
		// and not executing the catFactory
		return catFactory;
	}


	$('#buildcat').click(function(){
		var myNewCat = buildACat();
		myNewCat();
	});
});

// what is closure
// closures are special type of object that combine function 
// and relative environment i.e. you get any variables or input parameters that were 
// there at the time closure object was created

// Why are these important
// closures are an advanced feature in js they are like shortcuts they hold onto 
// information implementation and data in a bunch of different ways relative 
// to the function referenced which in this case is buildACat

// where are these used
// the closures are more oftenly used in module patterns

// in a nutshell a module implementation allows us to have a private implementation
// alongwith a public interface


// http://jsfiddle.net


//closure example
a = (function(){
	var privateFunction = function(){
		alert('hello');
	}

	return {
		publicFunction: function(){
			privateFunction();
		}
	}
}) ();

a.publicFunction();