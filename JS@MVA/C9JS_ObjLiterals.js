var batwing = {
	status: "Ready",
	rescueBatman: function(){
		document.write("Locating his transponder...initiating launch...");
	}
}

if (batwing.status === "Ready"){
	batwing.rescueBatman();
}

var utilities = {
	printAllMembers: function(targetObject){
		for(i in targetObject){
			document.write("<br/>" + targetObject[i]);
		}
	}
}

utilities.printAllMembers(batwing);

var planet = {
	id: 34,
	name: "Ichy",
	faction: {
		factionId: 2,
		name: "Nex",
		notification: function(){
			document.write("Nex alliance....unite!");
		}
	},
	cities: [
		{ locationId: 15, name: "Gladius"},
		{ locationId: 16, name: "Chalybs"},
		{ locationId: 17, name: "Ensis"}
	]
};

planet.faction.notification();
document.write(planet.cities[1].name);

document.write("<br/>"+ planet.name);
planet.name = "Vultus";
document.write("<br/>" + planet.name);

//this way we can add properties to already defined object literals
if(typeof planet.defense === "undefined") {
	planet.defense = "Ion Canon";
}

document.write(planet.defense);

for (member in planet)
{
	document.write("<br/>" + member + " ==> " + planet[member]);
}

//this is how a constructor looks
function car(make, model, year){
	this.make = make;
	this.model = model;
	this.year = model;
}
//up until this point

var myCar = new car("Eagle", "xyx", 1993);
var myOtherCar = new car("Dodge", "zyz", 1972);

alert(myCar.model);
alert(myOtherCar.model);