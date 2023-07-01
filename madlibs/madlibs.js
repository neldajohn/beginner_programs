/*
Name: Nelda
Program: Madlibs generator
*/


//beginning
const prompt=require("prompt-sync")({sigint:true});


///----FUNCTIONS-----//


//1 = function for bats madlibs
function bats(){
	//declare variables
	var myColor, adjective_1, time, adjective_2, place, food_1, food_2,
	verb, noun, number; 

	// ask user for input
	console.log("\n");
	myColor = prompt(`  Color: `);
	adjective_1 = prompt(`  Adjective: `);
	time = prompt(`  Time: `);
	adjective_2 = prompt(`  Adjective: `);
	place = prompt(`  Place: `);
	food_1 = prompt(`  Food: `);
	food_2 = prompt(`  Food: `);
	verb = prompt(`  Verb: `);
	noun = prompt(`  Noun: `);
	number = prompt(`  Number: `);

	//add user's entry to the story
	let myStory = "\n------ BATS ARE SO COOL! -----" + '\n\t"Bats are so cool! They are ' + 
	myColor + ", " + adjective_1 + " animals which have wings." +
	"\n\tThey like to fly around at " + time + " which makes some people scared of them." + 
	"\n\tBut bats are " + adjective_2  + ", and they don't want to hurt people" +
	". \n\tI have a pet bat that lives in " + place + "." + 
	"\n\tI like to feed him " + food_1 + " and " +  food_2 + ". He likes to " + verb +
	 ". \n\tI am his favorite person, but he also likes " + noun + 
	". \n\tI want to convince my parents to get me " + number + ' more bats."';

	console.log(myStory);

}

// 2 = Function for Halloween madlibs
function halloween(){
	// Declare variables
  	var noun_1, noun_2, adjective_1, noun_3, verb, verbing_1, verbing_2,
  	adjective_2, job, candy, adjective_3, adjective_4;

  	// Ask user for variables
  	console.log("\n");
 	noun_1 = prompt("  Noun: ");
  	noun_2 = prompt("  Noun: ");
  	adjective_1 = prompt("  Adjective: ");
  	noun_3 = prompt("  Noun: ");
  	verb = prompt("  Verb in simple present tense: ");
  	verbing_1 = prompt("  Verb ending in 'ing': ");
  	verbing_2 = prompt("  Verb ending in 'ing': ");
  	adjective_2 = prompt("  Adjective: ");
  	job = prompt("  Job: ");
  	candy = prompt("  Candy: "); 
  	adjective_3 = prompt("  Adjective: ");
  	adjective_4 = prompt("  Adjective: ");


	let myStory = "\n\tOn Halloween, you get to go trick-or-treating!" + 
	"\n\tEveryone will dress up in costumes, like a/an " + noun_1 + " or a/an " + noun_2 + 
	".\n\tThis year, you decided to dress up as a/an " + adjective_1 + " " + noun_3 + 
	".\n\tYour mom takes you and your best friend trick-or-treating." +  
	"\n\tWhile you are out, your dad stays at home and " + verb + 
	".\n\tOther fun things to do on Halloween are " + verbing_1 + " scary movies and " + 
	verbing_2 + ".\n\tThis year, you get lots of " + adjective_2 + 
	" candy!\n\tWhen you get home, your dad says he wants some, because he works hard as a " + 
	job + " and he deserves some of your " + candy + ".\n\tYou are " + adjective_3 + 
	" but you give it to him anyway. Dads are so " + adjective_4 + " but you love him!" ;

	console.log(myStory);
}

//3 = Function for Doctor madlibs
function doctor(){
  	// Declare variables
  	var adjective_1, place_1, adjective_2, adjective_3, clothing, bodyPart_1,
  	bodyPart_2, bodyPart_3, adjective_4, noun_1, noun_2, place_2, adjective_5;

  	// Ask user for variables
  	console.log("\n");
  	adjective_1 = prompt("  Adjective: ");
 	place_1 = prompt(`  Place: `);
  	adjective_2 = prompt("  Adjective: ");
  	adjective_3 = prompt("  Adjective: ");
  	clothing = prompt("  Clothing: ");
  	bodyPart_1 = prompt("  Body part: ");
  	bodyPart_2 = prompt("  Body part: "); 
  	bodyPart_3 = prompt("  Body part: ");
  	adjective_4 = prompt("  Adjective: ");
  	noun_1 = prompt("  Noun: "); 
  	noun_2 = prompt("  Noun: ");
  	place_2 = prompt(`  Place: `);
  	adjective_5 = prompt("  Adjective: "); 

  	let myStory =
  	"\n------ VISITING THE DOCTOR -----" + 
  	"\n\tEvery year, you should go visit the doctor. It is a very " + adjective_1 + 
  	" visit.\n\tUsually, you have to skip going to " + place_1 + 
  	" to go.\n\tYour doctor is usually a/an " + adjective_2 + 
  	" man or woman who is wearing a/an " + adjective_3 + " " + clothing + 
  	".\n\tThey will look at your " + bodyPart_1 + ", " + bodyPart_2 + ", and " + bodyPart_3 +
  	". Sometimes, they can be very " + adjective_4 + ".\n\tAfterwards, they will give you a " +
  	noun_1 + " and a " + noun_2 + " and your mom or dad will take you to " + 
  	place_2 + " as a treat.\n\tAll in all, the doctor's office isn't so " + 
  	adjective_5 + "!";

  	console.log(myStory);
}


//4 = function for China madlibs
function china(){
	//declare variables
	var personName, age, noun, number, verb_1, verb_2, adjective_1,
	place_1, place_2, place_3, adjective_2, food_1, adjective_3, food_2, drink, 
	adjective_4, adjective_5; 

	// ask user for variables
	console.log("\n");
	personName = prompt(`  Person's name: `);
	age = prompt(`  Age: `);
	noun = prompt(`  Noun: `);
	number = prompt(`  Number: `);
	verb_1 = prompt(`  Verb: `);
	verb_2 = prompt(`  Verb: `);
	adjective_1 = prompt(`  Adjective: `);
	place_1 = prompt(`  Place: `);
	place_2 = prompt(`  Place: `);
	place_3 = prompt(`  Place: `);
	adjective_2 = prompt(`  Adjective: `);
	food_1 = prompt(`  Food: `);
	adjective_3 = prompt(`  Adjective: `);
	food_2 = prompt(`  Food: `);
	drink = prompt(`  Drink: `);
	adjective_4 = prompt(`  Adjective: `);
	adjective_5 = prompt(`  Adjective : `);


	let myStory = "\n------ VISITING CHINA -----" + 
	"\n\tWhen " + personName + " was " + age + 
	", her parents told her they were going on a trip to China." +
	"\n\tThey told her to pack her " + noun + ". The plane ride was " + 
	number + " hours long! \n\tShe " + verb_1 + " and " + verb_2 + 
	". When they got to China, " + "she was very " + adjective_1 + 
	".\n\tOn their trip, they visited " +  place_1 + ", " + place_2 + 
	", and " + place_3 + ".\n\tThey ate a lot of interesting things, including " + 
	adjective_2 + " " + food_1 + ", " + adjective_3 + " " + food_2 + 
	", and " + drink + ".\n\tEveryone had a/an " +adjective_4 + 
	"time. When it was time to go home, she was very " + adjective_5 + 
	`.\n\t"!" she said. "Can't we stay longer?`

	console.log(myStory);
}

//5 = Function for storeTrip madlibs
function storeTrip(){
	// Declare variables
	var holiday, personName_1, verb_1, storeName, noun_1, adjective_1, noun_2,
	adjective_2, noun_3, adjective_3, noun_4, personName_2, verb_2, verb_3,
	adjective_4, storeType;

	// Ask user for variables
	console.log("\n");
	holiday = prompt("  Holiday: ");
	personName_1 = prompt("  Person's name: ");
	verb_1 = prompt("  Verb: ");
	storeName = prompt("  Store name: ");
	noun_1 = prompt("  Noun: ");
	adjective_1 = prompt("  Adjective: ");
	noun_2 = prompt("  Noun: ");
	adjective_2 = prompt("  Adjective: ");
	noun_3 = prompt("  Noun: ");
	adjective_3 = prompt("  Adjective: ");
	noun_4 = prompt("  Noun: ");
	personName_2 = prompt("  Person's name: ");
	verb_2 = prompt("  Verb: ");
	verb_3 = prompt("  Verb: ");
	adjective_4 = prompt("  Adjective: ");
	storeType = prompt("  Type of store: ");

	let myStory = "\n------ TRIP TO THE STORE -----" + 
	"\n\tIt was almost " + holiday + ", so " + personName_1 + 
	" knew they had to get grocery shopping.\n\tThey " + verb_1 + 
	" to the " + storeName + " and picked up a " + noun_1 + 
	".\n\tThey looked at their list. They needed to get " + 
	adjective_1 + " " + noun_2 + ", " + adjective_2 + " " + noun_3 + ", and " +
	adjective_3 + " " + noun_4 + ".\n\tThey couldn't find anything! Eventually they saw their friend, " + 
	personName_2 + ", and " + verb_2 + " them for help.\n\tTheir friend " + verb_3 + 
	`. "You're in the ` + adjective_4 + ` place!", they said. "This is a ` + storeType + `."`;

	console.log(myStory);
}


//6 = Function for School madlibs
function school(){
// Declare variables
	var number, womanName, adjective_1, adjective_2, adjective_3,
	noun_1, noun_2, noun_3, pNoun,
	noun_4, adjective_4, noun_5, verb,
	adjective_5;

	// Ask user for variables
	console.log("\n");
	number = prompt("  Number: ");
	womanName = prompt("  Woman's name: ")
	adjective_1 = prompt("  Adjective: ");
	adjective_2 = prompt("  Adjective: ");
	adjective_3 = prompt("  Adjective: ");

	noun_1 = prompt("  Noun: ");
	noun_2 = prompt("  Noun: ");
	noun_3 = prompt("  Noun: ");
	pNoun = prompt("  Plural Noun: ");

	noun_4 = prompt("  Noun: ");
	adjective_4 = prompt("  Adjective: ");
	noun_5 = prompt("  Noun: ");
	verb = prompt("  Verb: ");
	
	adjective_5 = prompt("  Adjective: ");

	let myStory =
	"\n------ MY FIRST DAY OF SCHOOL -----" + 
	"\n\tToday was my first day of grade " + number + ".\n\tMy teacher is Ms. " + womanName +
	". She seems " + adjective_1 + " and " + adjective_2 + ".\n\tI think her class will be pretty " +
	adjective_3 + ". My friends, " + noun_1 + " and " + noun_2 + ", are also in my class." + 
	"\n\tWe messed around during class by hiding " + noun_3 + " in peoples' " + pNoun +
	" and asking questions about " + noun_4 + ".\n\tThe teacher got really " + adjective_4 + 
	" at us and told us that we have to go to the " + noun_5 + ".\n\tThis just made us " + 
	verb + " more. It was a " + adjective_5 + " first day of school!";

	console.log(myStory);
}

//7 = Function for Australia madlibs
function australia(){
	// Declare variables
	var noun_1, number, noun_2, food,
	adjective_1, verb_1, work, noun_2,
	adjective_2, verb_2, verb_3, adjective_3;

	// Ask user for variables
	console.log("\n");
	noun_1 = prompt("  Noun: ");
	number = prompt("  Number: ");
	noun_2 = prompt("  Noun: ");
	food = prompt("  Food: ");

	adjective_1 = prompt("  Adjective: ");
	verb_1 = prompt("  Verb ending in ing: ");
	work = prompt("  Work: ");
	noun_3 = prompt("  Noun: ");

	adjective_2 = prompt("  Adjective: ");
	verb_2 = prompt("  Verb: ");
	verb_3 = prompt("  Verb: ");
	adjective_3 = prompt("  Adjective: ");
	  

	let myStory =
	"\n------ ADVENTURE IN AUSTRALIA -----" + 
	"\n\tI decided to go on a vacation to Australia with " + noun_1 +
	".\n\tWe got to the airport " + number + " hours early.\n\tWhen we went through security, " +
	"I got stopped because I forgot to take " + noun_2 + " out of my pocket.\n\tWe got some " +
	food + " for the flight and arrived at the gate.\n\tOnce we boarded the plane, " + 
	"I was sitting next to a very " + adjective_1 + " man.\n\tHe spent the entire flight " +
	verb_1 + " and talking about his job doing " + work + " .\n\tWhenever I tried to sleep, " +
	"he would step around me to go to the " + noun_3 + ".\n\tI was so " + adjective_2 +
	". Since I couldn't sleep, I decided to " + verb_2 + " and " + verb_3 +
	" instead.\n\tFinally, we arrived in Australia. All in all, the flight was " + adjective_3 + "!";

	console.log(myStory);
}

//8 =  Function for Birthday madlibs
function birthday(){
	// Declare variables
	var personName_1, noun_1, adjective_1, activity,
	verb, personName_2, noun_2, personName_3, 
	noun_3, verbPast, songName, adjective_2,
	adjective_3;

	// Ask user for variables
	console.log("\n");
	personName_1 = prompt("  Girl's name: ");
	noun_1 = prompt("  Noun: ");
	adjective_1 = prompt("  Adjective: ");
	activity = prompt("  Activity: ");

	verb = prompt("  Verb: ");
	personName_2 = prompt("  Person's name: ");
	noun_2 = prompt("  Noun: ");
	personName_3 = prompt("  Person's name: ");

	noun_3 = prompt("  Noun: ");
	verbPast = prompt("  Past tense verb: ");
	songName = prompt("  Song name: ");
	adjective_2 = prompt("  Adjective: ");

	adjective_3 = prompt("  Adjective: ");

	let myStory = "\n------ BIRTHDAY CELEBRATION -----" + 
	"\n\tYesterday I went to " + personName_1 +"'s birthday party. I got her a " + noun_1+
	".\n\tThe party was " + adjective_1 + ". We started by playing " + activity +
	" and then there was a " + verb + " party.\n\tLots of my friends were there but I " + 
	"mostly hung out with " + personName_2 + ".\n\tWe talked about " + noun_2 +
	" and how our friend " + personName_3 + " is a " + noun_3 + ".\n\tDuring cake, everyone " +
	verbPast + " and sang " + songName + ".\n\tI had a " + adjective_2 + 
	" time at the party and enjoyed celebrating " + personName_1 + 
	".\n\tShe is such a " + adjective_3 + " friend.";

	console.log(myStory);
}

//9 = Function for Beach madlibs
function beach(){
	// Declare variables
	var place, personName, adjective_1, noun_1,
	noun_2, adjective_2, adjective_3, noun_3,
	number, noun_4, food, verb;

	// Ask user for variables
	console.log("\n");
	place = prompt("  Place: ");
	personName = prompt("  Person name: ");
	adjective_1 = prompt("  Adjective: ");
	noun_1 = prompt("  Noun: ");

	noun_2 = prompt("  Noun: ");
	adjective_2 = prompt("  Adjective: ");
	adjective_3 = prompt("  Adjective: ");
	noun_3 = prompt("  Noun: ");

	number = prompt("  Number: ");
	noun_4 = prompt("  Noun: ");
	food = prompt("  Food: ");
	verb = prompt("  Verb: ");
	  

	let myStory = 
	"\n------ DAY AT THE BEACH -----" + 
	"\n\tI went to the beach in " + place + " today with " + personName + 
	". We had a " + adjective_1 + " time.\n\tWe first built a " + noun_1 + 
	" and then we ran around in the " + noun_2 + " for a little while.\n\tThe water was a bit " +
	adjective_2 + ". The sun was very " + adjective_3 + " so we made sure to wear a lot of " +
	noun_3 + ".\n\tWe spent " + number + " hours there.\n\tAt the end of the day, " + 
	"we treated ourselves to a " + noun_4 + " and had " + food + " for dinner." + 
	"\n\tI definitely want to go to the beach again but next time I want to " + verb + ".";

	console.log(myStory);
}

//10 = Function for Laundry madlibs
function laundry(){
	// Declare variables
	var verb_1, verb_2, noun_1, verb_3,
	pNoun_1, pNoun_2, noun_2, colorPlural_1,
	colorPlural_2, number_1, verb_4, verb_5,
	verb_6, number_2, verb_7, adjective;

	// Ask user for variables
	console.log("\n");
	verb_1 = prompt("  Verb: ");
	verb_2 = prompt("  Verb: ");
	noun_1 = prompt("  Noun: ");
	verb_3 = prompt("  Verb: ");

	pNoun_1 = prompt("  Plural Noun: ");
	pNoun_2 = prompt("  Plural Noun: ");
	noun_2 = prompt("  Noun: ");
	colorPlural_1 = prompt("  Color Plural: ");

	colorPlural_2 = prompt("  Color Plural: ");
	number_1 = prompt("  Number: ");
	verb_4 = prompt("  Verb: ");
	verb_5 = prompt("  Verb: ");

	verb_6 = prompt("  Verb: ");
	number_2 = prompt("  Number: ");
	verb_6 = prompt("  Verb: ");
	adjective = prompt("  Adjective: ");
	  

	let myStory =  "\n------ LAUNDRY DAY -----" + 
	    "\n\tIn order to do your laundry, first you have to " + verb_1 + " your clothes." +
	    "\n\tThen you have to " + verb_2 + " the " + noun_1 + " machine.\n\tTake your time not to " +
	    verb_3 + " any items that may be gross.\n\tSeparate your " + pNoun_1 + " from your " + 
	    pNoun_2 + " and then load the " + noun_2 + " machine.\n\tMake sure not to mix the " +
	    colorPlural_1 + " with the " + colorPlural_2 + ".\n\tSet temperature to " + number_1 +
	    " and begin the cycle.\n\tAfter that is finished, " + verb_4 + " your clothes and "
	    + verb_5 + " them in the dryer.\n\tSet the temperature and " + verb_6 + " the dryer. " +
	    "\n\tAfter about " + number_2 + " minutes, it should be complete!\n\tNow all you have to do is " +
	    verb_6 + " your clothes and you are all set!\n\t" + adjective + " laundry!";

	console.log(myStory);
}

function menu(){
	console.log("----= MENU =----");
	madLibs = ["Bats are so cool", "Halloween Trick-or-treating", "Going to the doctor",
		"Visiting China", "A trip to the store", "My first day of school", "Flying to Australia",
		"Birthday party fun", "Beach day", "How to do laundry"];

  	for (let i = 0; i < madLibs.length; i++)
  	{
  		console.log("\t" + (i+1).toString() + ". " + madLibs[i]);
  	}
}


//introduce the game
console.log(`******* MADLIBS GENERATOR *******\n`);

console.log("\t Please select the madlibs you want to play.");
//display the menu
menu();

//ask user for choice
console.log("\n");
let choice = parseInt(prompt(`  Enter your choice number: `));
while (choice < 1 || choice > 10){
	choice = parseInt(prompt(`  Enter your choice number: `));
}
	
//call the appropriate function
if (choice == 1){
	bats();
}
else if (choice == 2){
	halloween();
}
else if (choice == 3){
	doctor();
}
else if (choice == 4){
	china();
}
else if (choice == 5){
	storeTrip();
}
else if (choice == 6){
	school();
}
else if (choice == 7){
	australia();
}
else if (choice == 8){
	birthday();
}
else if (choice == 9){
	beach();
}
else{
	laundry();
}

console.log("\n");















