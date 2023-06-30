/*
Name: Nelda
Program: Madlibs generator

*/


//beginning
const prompt=require("prompt-sync")({sigint:true});


//introduce the game
console.log(`******* MADLIBS GENERATOR *******\n`)


//1 = function for bats madlibs
function Bats (){
	//declare variables
	var myColor, adjective_1, time, adjective_2, place, food_1, food_2,
	verb, noun, number; 

	// ask user for input
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
	let myStory = "\n------ BATS ARE SO COOL! -----" + '\n\t"Bats are so cool! They are ' + myColor + ", " + adjective_1 + " animals which have wings." +
	"\n\tThey like to fly around at " + time + " which makes some people scared of them." + 
	"\n\tBut bats are " + adjective_2  + ", and they don't want to hurt people. \n\tI have a pet bat that lives in " + place + "." + 
	"\n\tI like to feed him " + food_1 + " and " +  food_2 + ". He likes to " + verb + ". \n\tI am his favorite person, but he also likes " + noun + 
	". \n\tI want to convince my parents to get me " + number + ' more bats."';

	return (myStory);

}

// 2 = Function for Halloween madlibs
function Halloween() {
	// Declare variables
  	var noun_1, noun_2, adjective_1, noun_3, verb, verbing_1, verbing_2,
  	adjective_2, job, candy, adjective_3, adjective_4;

  	// Ask user for variables
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

	return myStory;
}

//3 = Function for Doctor madlibs
function Doctor() {
  	// Declare variables
  	var adjective_1, place_1, adjective_2, adjective_3, clothing, bodyPart_1,
  	bodyPart_2, bodyPart_3, adjective_4, noun_1, noun_2, place_2, adjective_5;

  	// Ask user for variables
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

  return myStory;
}


//4 = function for China madlibs
function China (){
	//declare variables
	var personName, age, noun, number, verb_1, verb_2, adjective_1,
	place_1, place_2, place_3, adjective_2, food_1, adjective_3, food_2, drink, 
	adjective_4, adjective_5; 

	// ask user for variables
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

	return myStory;
}

//5 = Function for storeTrip madlibs
function storeTrip() {
	// Declare variables
	var holiday, personName_1, verb_1, storeName, noun_1, adjective_1, noun_2,
	adjective_2, noun_3, adjective_3, noun_4, personName_2, verb_2, verb_3,
	adjective_4, storeType;

	// Ask user for variables
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

	return myStory;
}

// Function for cellPhone madlibs
function cellPhone() {
  // Declare variables
  var adjective_1, adjective_2, noun, verb_1, verb_2, place;

  // Ask user for variables
  adjective_1 = prompt("  Adjective: ");
  adjective_2 = prompt("  Adjective: ");
  noun = prompt("  Noun: ");
  verb_1 = prompt("  Verb: ");
  verb_2 = prompt("  Verb: ");
  place = prompt("  Place: ");

  let myStory =
    "\n------ MY CELL PHONE -----" +
    "\n\tMy cell phone is a " +
    adjective_1 +
    " " +
    adjective_2 +
    " " +
    noun +
    ". It can " +
    verb_1 +
    " and " +
    verb_2 +
    "." +
    "\n\tI take it with me everywhere I go, even to " +
    place +
    "." +
    "\n\tI love my cell phone because it keeps me connected and entertained.";

  return myStory;
}

// Function for Neighbors madlibs
function Neighbors() {
  // Declare variables
  var adjective, noun_1, noun_2, verb, place;

  // Ask user for variables
  adjective = prompt("  Adjective: ");
  noun_1 = prompt("  Noun: ");
  noun_2 = prompt("  Noun: ");
  verb = prompt("  Verb: ");
  place = prompt("  Place: ");

  let myStory =
    "\n------ MY NEIGHBORS -----" +
    "\n\tMy neighbors are " +
    adjective +
    " " +
    noun_1 +
    "s. They live next door and are always " +
    verb +
    "." +
    "\n\tSometimes they borrow things from us, like " +
    noun_2 +
    "s." +
    "\n\tI see them often when I'm outside or when I visit " +
    place +
    "." +
    "\n\tIt's nice to have friendly neighbors.";

  return myStory;
}

// Function for Neighbors madlibs
function Concert() {
  // Declare variables
  var adjective, noun_1, noun_2, verb, place;

  // Ask user for variables
  adjective = prompt("  Adjective: ");
  noun_1 = prompt("  Noun: ");
  noun_2 = prompt("  Noun: ");
  verb = prompt("  Verb: ");
  place = prompt("  Place: ");

  let myStory =
    "\n------ MY NEIGHBORS -----" +
    "\n\tMy neighbors are " +
    adjective +
    " " +
    noun_1 +
    "s. They live next door and are always " +
    verb +
    "." +
    "\n\tSometimes they borrow things from us, like " +
    noun_2 +
    "s." +
    "\n\tI see them often when I'm outside or when I visit " +
    place +
    "." +
    "\n\tIt's nice to have friendly neighbors.";

  return myStory;
}

// Function for aboutTime madlibs
function aboutTime() {
  // Declare variables
  var verb_1, verb_2, adjective, noun, place;

  // Ask user for variables
  verb_1 = prompt("  Verb: ");
  verb_2 = prompt("  Verb: ");
  adjective = prompt("  Adjective: ");
  noun = prompt("  Noun: ");
  place = prompt("  Place: ");

  let myStory =
    "\n------ IT'S ABOUT TIME -----" +
    "\n\tIt's about time we " +
    verb_1 +
    " and " +
    verb_2 +
    ". The wait has been " +
    adjective +
    "." +
    "\n\tWe're excited to finally " +
    noun +
    " at " +
    place +
    ".";

  return myStory;
}

// Function for Coffee madlibs
function Coffee() {
  // Declare variables
  var adjective, noun_1, noun_2, verb, place;

  // Ask user for variables
  adjective = prompt("  Adjective: ");
  noun_1 = prompt("  Noun: ");
  noun_2 = prompt("  Noun: ");
  verb = prompt("  Verb: ");
  place = prompt("  Place: ");

  let myStory =
    "\n------ COFFEE LOVER -----" +
    "\n\tI love waking up to the smell of " +
    adjective +
    " " +
    noun_1 +
    "." +
    "\n\tI " +
    verb +
    " my cup of " +
    noun_2 +
    " and head to " +
    place +
    " to start my day.";

  return myStory;
}

// Function for lookItUp madlibs
function lookItUp() {
  // Declare variables
  var verb, noun_1, noun_2, adjective, place;

  // Ask user for variables
  verb = prompt("  Verb: ");
  noun_1 = prompt("  Noun: ");
  noun_2 = prompt("  Noun: ");
  adjective = prompt("  Adjective: ");
  place = prompt("  Place: ");

  let myStory =
    "\n------ LOOK IT UP -----" +
    "\n\tWhen I need to " +
    verb +
    ", I always grab my " +
    noun_1 +
    " and " +
    noun_2 +
    "." +
    "\n\tIt's " +
    adjective +
    " to have a resource like that. I can find answers to almost anything!" +
    "\n\tI enjoy exploring new topics and learning more about " +
    place +
    ".";

  return myStory;
}

// Function for Goodnight madlibs
function Goodnight() {
  // Declare variables
  var adjective, noun_1, noun_2, verb, place;

  // Ask user for variables
  adjective = prompt("  Adjective: ");
  noun_1 = prompt("  Noun: ");
  noun_2 = prompt("  Noun: ");
  verb = prompt("  Verb: ");
  place = prompt("  Place: ");

  let myStory =
    "\n------ GOODNIGHT ROUTINE -----" +
    "\n\tMy " +
    adjective +
    " " +
    noun_1 +
    " helps me relax before bedtime." +
    "\n\tI " +
    verb +
    " my " +
    noun_2 +
    " and get ready to sleep." +
    "\n\tI always have sweet dreams about ";
}

// Function for Name madlibs
function Name() {
  // Declare variables
  var adjective, noun, verb, number, place;

  // Ask user for variables
  adjective = prompt("  Adjective: ");
  noun = prompt("  Noun: ");
  verb = prompt("  Verb: ");
  number = prompt("  Number: ");
  place = prompt("  Place: ");

  let myStory =
    "\n------ MY NAME -----" +
    "\n\tMy name is " +
    adjective +
    " " +
    noun +
    "." +
    "\n\tI " +
    verb +
    " it when people remember my name." +
    "\n\tI've met " +
    number +
    " people with the same name as mine." +
    "\n\tIt's a small world! I've met them in " +
    place +
    ".";

  return myStory;
}

// Function for babySitter madlibs
function babySitter() {
  // Declare variables
  var name, adjective, noun, verb, number, place;

  // Ask user for variables
  name = prompt("  Name: ");
  adjective = prompt("  Adjective: ");
  noun = prompt("  Noun: ");
  verb = prompt("  Verb: ");
  number = prompt("  Number: ");
  place = prompt("  Place: ");

  let myStory =
    "\n------ BABY SITTER -----" +
    "\n\tMy baby sitter's name is " +
    name +
    "." +
    "\n\tShe is " +
    adjective +
    " and always brings " +
    noun +
    " to play with." +
    "\n\tWe " +
    verb +
    " a lot and have so much fun." +
    "\n\tShe has been my baby sitter for " +
    number +
    " years." +
    "\n\tWe love going to " +
    place +
    " together.";

  return myStory;
}

// Function for Oscars madlibs
function Oscars() {
  // Declare variables
  var personName, adjective, noun, verb, place;

  // Ask user for variables
  personName = prompt("  Person's name: ");
  adjective = prompt("  Adjective: ");
  noun = prompt("  Noun: ");
  verb = prompt("  Verb: ");
  place = prompt("  Place: ");

  let myStory =
    "\n------ OSCARS NIGHT -----" +
    "\n\tIt was Oscars night, and " +
    personName +
    " looked " +
    adjective +
    " in their " +
    noun +
    "." +
    "\n\tThey " +
    verb +
    " the red carpet and headed to " +
    place +
    " for the ceremony." +
    "\n\tEveryone was excited to see who would win the awards.";

  return myStory;
}

// Function for nurseryRhymes madlibs
function nurseryRhymes() {
  // Declare variables
  var noun, adjective, verb, number, place;

  // Ask user for variables
  noun = prompt("  Noun: ");
  adjective = prompt("  Adjective: ");
  verb = prompt("  Verb: ");
  number = prompt("  Number: ");
  place = prompt("  Place: ");

  let myStory =
    "\n------ NURSERY RHYMES -----" +
    "\n\t" +
    noun +
    " sat on the " +
    adjective +
    " wall." +
    "\n\t" +
    noun;
}

// Function for Joe madlibs
function Joe() {
  // Declare variables
  var adjective, noun_1, noun_2, verb, place;

  // Ask user for variables
  adjective = prompt("  Adjective: ");
  noun_1 = prompt("  Noun: ");
  noun_2 = prompt("  Noun: ");
  verb = prompt("  Verb: ");
  place = prompt("  Place: ");

  let myStory =
    "\n------ MEET JOE -----" +
    "\n\tLet me tell you about Joe. He is " +
    adjective +
    " and always carries a " +
    noun_1 +
    "." +
    "\n\tHe loves to " +
    verb +
    " and often talks about " +
    noun_2 +
    "." +
    "\n\tWe often meet at " +
    place +
    " to catch up.";

  return myStory;
}

// Function for ballGame madlibs
function ballGame() {
  // Declare variables
  var adjective, noun_1, noun_2, verb, place;

  // Ask user for variables
  adjective = prompt("  Adjective: ");
  noun_1 = prompt("  Noun: ");
  noun_2 = prompt("  Noun: ");
  verb = prompt("  Verb: ");
  place = prompt("  Place: ");

  let myStory =
    "\n------ BALL GAME -----" +
    "\n\tWe gathered at the " +
    adjective +
    " " +
    noun_1 +
    " to play a game of " +
    noun_2 +
    "." +
    "\n\tEveryone was excited and ready to " +
    verb +
    "." +
    "\n\tWe had a great time at " +
    place +
    ".";

  return myStory;
}

// Function for Dinner madlibs
function Dinner() {
  // Declare variables
  var adjective, noun_1, noun_2, verb, place;

  // Ask user for variables
  adjective = prompt("  Adjective: ");
  noun_1 = prompt("  Noun: ");
  noun_2 = prompt("  Noun: ");
  verb = prompt("  Verb: ");
  place = prompt("  Place: ");

  let myStory =
    "\n------ DINNER TIME -----" +
    "\n\tFor dinner, we had " +
    adjective +
    " " +
    noun_1 +
    "." +
    "\n\tI " +
    verb +
    " my " +
    noun_2 +
    " and enjoyed the meal." +
    "\n\tThe atmosphere at " +
    place +
    " was lovely.";

  return myStory;
}

// Function for Movies madlibs
function Movies() {
  // Declare variables
  var adjective, noun_1, noun_2, verb, place;

  // Ask user for variables
  adjective = prompt("  Adjective: ");
  noun_1 = prompt("  Noun: ");
  noun_2 = prompt("  Noun: ");
  verb = prompt("  Verb: ");
  place = prompt("  Place: ");

  let myStory =
    "\n------ MOVIE NIGHT -----" +
    "\n\tWe decided to have a " +
    adjective +
    " " +
    noun_1 +
    " for our movie night." +
    "\n\tWe " +
    verb +
    " the movie on the big " +
    noun_2 +
    " and had a great time." +
    "\n\tWe can't wait";
}

// Function for School madlibs
function School() {
  // Declare variables
  var adjective, noun, verb, number, place;

  // Ask user for variables
  adjective = prompt("  Adjective: ");
  noun = prompt("  Noun: ");
  verb = prompt("  Verb: ");
  number = prompt("  Number: ");
  place = prompt("  Place: ");

  let myStory =
    "\n------ SCHOOL DAYS -----" +
    "\n\tSchool is " +
    adjective +
    " with " +
    noun +
    "." +
    "\n\tI " +
    verb +
    " to school every day and learn so much." +
    "\n\tThere are " +
    number +
    " classrooms and a " +
    place +
    " where we play during breaks." +
    "\n\tI enjoy my time at school.";

  return myStory;
}

// Function for Australia madlibs
function Australia() {
  // Declare variables
  var adjective, noun, verb, number, place;

  // Ask user for variables
  adjective = prompt("  Adjective: ");
  noun = prompt("  Noun: ");
  verb = prompt("  Verb: ");
  number = prompt("  Number: ");
  place = prompt("  Place: ");

  let myStory =
    "\n------ ADVENTURE IN AUSTRALIA -----" +
    "\n\tI had an " +
    adjective +
    " time exploring " +
    noun +
    " in Australia." +
    "\n\tI " +
    verb +
    " with kangaroos and saw " +
    number +
    " koalas." +
    "\n\tThe landscapes were breathtaking, especially in " +
    place +
    "." +
    "\n\tIt was a memorable adventure.";

  return myStory;
}

// Function for Birthday madlibs
function Birthday() {
  // Declare variables
  var adjective, noun, verb, number, place;

  // Ask user for variables
  adjective = prompt("  Adjective: ");
  noun = prompt("  Noun: ");
  verb = prompt("  Verb: ");
  number = prompt("  Number: ");
  place = prompt("  Place: ");

  let myStory =
    "\n------ BIRTHDAY CELEBRATION -----" +
    "\n\tOn my birthday, I received " +
    adjective +
    " " +
    noun +
    " as gifts." +
    "\n\tI " +
    verb +
    " " +
    number +
    " candles on my cake and made a wish." +
    "\n\tWe celebrated at " +
    place +
    " with friends and family." +
    "\n\tIt was a joyous occasion.";

  return myStory;
}

// Function for Beach madlibs
function Beach() {
  // Declare variables
  var adjective, noun, verb, number, place;

  // Ask user for variables
  adjective = prompt("  Adjective: ");
  noun = prompt("  Noun: ");
  verb = prompt("  Verb: ");
  number = prompt("  Number: ");
  place = prompt("  Place: ");

  let myStory =
    "\n------ DAY AT THE BEACH -----" +
    "\n\tThe beach is a " +
    adjective +
    " place with " +
    noun +
    " and " +
    verb +
    " waves." +
    "\n\tI built " +
    number +
    " sandcastles and played in the water." +
    "\n\tThe beach is my favorite ";
}

// Function for Laundry madlibs
function laundry() {
  // Declare variables
  var adjective_1, noun_1, verb_1, adjective_2, noun_2, verb_2;

  // Ask user for variables
  adjective_1 = prompt("  Adjective: ");
  noun_1 = prompt("  Noun: ");
  verb_1 = prompt("  Verb: ");
  adjective_2 = prompt("  Adjective: ");
  noun_2 = prompt("  Noun: ");
  verb_2 = prompt("  Verb: ");

  let myStory =
    "\n------ LAUNDRY DAY -----" +
    "\n\tIt was a " +
    adjective_1 +
    " day, and I had a pile of " +
    noun_1 +
    " to wash." +
    "\n\tI decided to " +
    verb_1 +
    " the laundry to get it done." +
    "\n\tAs I sorted the clothes, I found a " +
    adjective_2 +
    " " +
    noun_2 +
    "." +
    "\n\tI couldn't help but " +
    verb_2 +
    " in surprise." +
    "\n\tLaundry day turned out to be full of surprises.";

  return myStory;
}

console.log(storeTrip()) 
console.log("\n")