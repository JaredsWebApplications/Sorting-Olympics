/************************************************************************

 *************************************************************************/


const var NUM_ALGOS = 4;							//Number of algorithms we're sorting with
const var ORIGINAL_STRING = "5F7D8A1593B47B8";		//Initial string

var passString[NUM_ALGOS] = "";						//An array of strings, each one will be passed into a different algorithm
var inputString, expectedString = "";				//The original string and the expected string

//Function called before draw
function setup() {
	//The original string is our inputString
	inputString = ORIGINAL_STRING;
	for(int i = 0; i < NUM_ALGOS; i++)
	{
		passString[i] = inputString;
	}
	//expectedString = Algorithm.Sort();			//Sorts the string completely								NOT IMPLEMENTED
}

var done = false;

//Function called every frame
function draw() {
	if(!done)
	{
		done = true;								//we're done unless an algorithm updates
		
		//Go through all algorithms
		for(int i = 0; i < NUM_ALGOS; i++)
		{
			//If the current algorithm isn't done sorting
			if(passString[i] != expectedString)
			{
				//passString[i] = Algorithm.Pass(i);	//Perform a pass on the algorithm						NOT IMPLEMENTED
				//Algorithm.UpdateDraw(i);			//Draw the update to the screen								NOT IMPLEMENTED
				done = false;						//An algorithm updated, we're not done yet
			}
		}
	}
	else
	{
		//Update update our new input string by shifting
		inputString = inputString.substring(1, substring.length() + inputString.substring(0,0));
		
		//If we haven't looped yet
		if(inputString != ORIGINAL_STRING)
		{
			//For every string
			for(int i = 0; i < NUM_ALGOS; i++)
			{
				passString[i] = inputString;		//Set the current string to the new input string
			}
			done = false;							//We are no longer done
		}
		//else If we've looped, don't update done. We'll stop performing operations.
		else
		{
			noLoop();								//Stops draw from being called again
		}
	}
}