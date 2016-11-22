$(function(){
	//alert('got here');
	$("#tabs").tabs().tabs("add","C9JS_16.html","Click-a-bob"); 

	//add parameter above calls for adding a new tab
	//C9JS_16.html is nothing but the name of file i wished to reference to show 
	//it's content inside the newly created tab
	//Click-a-bob is just the name of the tab

	$("#datepicker").datepicker({
		onSelect: function(dataText, inst){ 
		//inst is nothing but an object of type dateText
			$("#title").text("You picked:" + dateText);
		}
	});
});

