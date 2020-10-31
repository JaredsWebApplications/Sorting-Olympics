var inputs = [
    "05CA627BC2B6F03",
    "065DE6671F040BA",
    "0684FB893D5754E",
    "07C9A2D183E4B65",
    "09F48E7862D2616",
    "1FAB3D47905C286",
    "286E1D0342D7859",
    "30E530C4786AF21",
    "328DE4765C10BA9",
    "34F2756F18E90BA",
    "90BA34F0756F180",
    "D7859286E2D0342"
]

function select(container){
/*
 * Source: https://stackoverflow.com/questions/4550505/getting-a-random-value-from-a-javascript-array
*/
    return container[Math.floor(Math.random() * container.length)];
}

var ORIGINAL_STRING = select(inputs);
//An array of strings, each one will be passed into a different algorithm
var passString = new Array(  	ORIGINAL_STRING,
								ORIGINAL_STRING,
								ORIGINAL_STRING,
								ORIGINAL_STRING);

var inputString = "";
var expectedString = "";		//The original string and the expected string
const NUM_ALGOS = passString.length; //Number of algorithms we're sorting with

//Function called before draw
function setup() {
	Algo = new selectAlgorithm();
	Display = new displayInterface();
	Display.setup();
	Display.draw(passString[0], passString[1], passString[2], passString[3]);
	//The original string is our inputString
	inputString = ORIGINAL_STRING;
	expectedString = ORIGINAL_STRING.split('').sort().join('');

	frameRate(1);
}

var done = false;

//Function called every frame
function draw() {
	if(!done)
	{
		done = true;	//we're done unless an algorithm updates

		//Go through all algorithms
		for(let i = 0; i < NUM_ALGOS; i++)
		{
			//If the current algorithm isn't done sorting
			if(passString[i] != expectedString)
			{
        //Perform a pass on the algorithm
				passString[i] = Algo.Pass(passString[i], i);
				done = false;	//An algorithm updated, we're not done yet
			}
		}
	}
	else
	{
		//Update our new input string by shifting
		inputString = inputString.substring(inputString.length - 1 ,inputString.length) + inputString.substring(0, inputString.length - 1);

		//Reset our algorithms
		Algo = new selectAlgorithm();

		//If we haven't looped yet
		if(inputString != ORIGINAL_STRING)
		{
			//For every string
			for(let i = 0; i < NUM_ALGOS; i++)
			{
        //Set the current string to the new input string
				passString[i] = inputString;
			}
			done = false;	//We are no longer done
		}
		//else If we've looped, don't update done. We'll stop performing operations.
		else
		{
			noLoop();	//Stops draw from being called again
		}
	}
	Display.draw(passString[0], passString[1], passString[2], passString[3]);
}
