/*
Name: Nelda
Program: Madlibs generator
*/


//import
const prompt=require("prompt-sync")({sigint:true});


//introduce the game
console.log(`******* MADLIBS GENERATOR *******\n`)


//function for bats madlibs
function Bats (){
	//declare variables
	var myColor, adjective_1, time, adjective_2, place, food_1, food_2,
	verb, noun, number; 

	// ask user for variables
	myColor = prompt(`  Please enter a color: `);
	adjective_1 = prompt(`  Please enter an adjective: `);
	time = prompt(`  Please enter any time: `);
	adjective_2 = prompt(`  Please enter another adjective: `);
	place = prompt(`  Please enter a place: `);
	food_1 = prompt(`  Please name any food: `);
	food_2 = prompt(`  Please name another food: `);
	verb = prompt(`  Please enter a verb: `);
	noun = prompt(`  Please enter a noun: `);
	number = prompt(`  Please enter a number: `);


	let myStory = "\n------ BATS ARE SO COOL! -----" + '\n\t"Bats are so cool! They are ' + myColor + ", " + adjective_1 + " animals which have wings." +
	"\n\tThey like to fly around at " + time + " which makes some people scared of them." + 
	"\n\tBut bats are " + adjective_2  + ", and they don't want to hurt people. \n\tI have a pet bat that lives in " + place + "." + 
	"\n\tI like to feed him " + food_1 + " and " +  food_2 + ". He likes to " + verb + ". \n\tI am his favorite person, but he also likes " + noun + 
	". \n\tI want to convince my parents to get me " + number + ' more bats."';

	return (myStory);

}


//function for bats madlibs
function China (){
	//declare variables
	var personName, age, noun, number, verb_1, verb_2, adjective_1,
	place_1, place_2, place_3, adjective_2, food_1, adjective_3, food_2, drink, 
	adjective_4, adjective_5; 

	// ask user for variables
	personName = prompt(`  Please enter a person's name: `);
	age = prompt(`  Please enter an age: `);
	noun = prompt(`  Please enter a noun: `);
	number = prompt(`  Please enter a number: `);
	verb_1 = prompt(`  Please enter a verb: `);
	verb_2 = prompt(`  Please enter another verb: `);
	adjective_1 = prompt(`  Please enter an adjective: `);
	place_1 = prompt(`  Please name a place: `);
	place_2 = prompt(`  Please name another place: `);
	place_3 = prompt(`  Please name another place again: `);
	adjective_2 = prompt(`  Please enter another adjective: `);
	food_1 = prompt(`  Please name any food: `);
	adjective_3 = prompt(`  Please enter another adjective again: `);
	food_2 = prompt(`  Please name another food: `);
	drink = prompt(`  Please name a drink: `);
	adjective_4 = prompt(`  Please enter another adjective again: `);
	adjective_5 = prompt(`  Please enter one more adjective : `);


	let myStory = "\n------ VISITING CHINA -----" + "\n\tWhen " + personName + " was " + age + ", her parents told her they were going on a trip to China." +
	"\n\tThey told her to pack her " + noun + ". The plane ride was " + number + " hours long! \n\tShe " + verb_1 + " and " + verb_2 + ". When they got to China, " + 
	"she was very " + adjective_1 + ".\n\tOn their trip, they visited " +  place_1 + ", " + place_2 +
", and " + place_3 + ".\n\tThey ate a lot of interesting things, including " + adjective_2 + " " + 
 food_1 + ", " + adjective_3 + " " + food_2 + ", and " + drink + ".\n\tEveryone had a/an " +adjective_4 + 
 "time. When it was time to go home, she was very " + adjective_5 + `.\n\t"!" she said. "Can't we stay longer?`

	return myStory;
}

console.log(China()) 
// insert variables into a long string

// print out the whole string