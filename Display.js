/************************************************************************

 *************************************************************************/

const ORIGINAL_STRING = "5F7D8A1593B47B8";								//Initial string

var passString = {	ORIGINAL_STRING,									//An array of strings, each one will be passed into a different algorithm
					ORIGINAL_STRING,
					ORIGINAL_STRING,
					ORIGINAL_STRING};					
Algo = new Algorithm();
var inputString, expectedString = "";									//The original string and the expected string
const NUM_ALGOS = passString.size;										//Number of algorithms we're sorting with

//Function called before draw
function setup() {
	//The original string is our inputString
	inputString = ORIGINAL_STRING;
	expectedString = Algo.Sort(inputString);						//Sorts the string completely							NOT IMPLEMENTED
}

var done = false;

//Function called every frame
function draw() {
	if(!done)
	{
		done = true;													//we're done unless an algorithm updates
		
		//Go through all algorithms
		for(let i = 0; i < NUM_ALGOS; i++)
		{
			//If the current algorithm isn't done sorting
			if(passString[i] != expectedString)
			{
				passString[i] = Algo.Pass(passString[i], i);		//Perform a pass on the algorithm						NOT IMPLEMENTED
				done = false;										//An algorithm updated, we're not done yet
			}
		}
		

	}
	else
	{
		//Update update our new input string by shifting
		inputString = inputString.substring(1, inputString.length + inputString.substring(0,0));
		
		//If we haven't looped yet
		if(inputString != ORIGINAL_STRING)
		{
			//For every string
			for(let i = 0; i < NUM_ALGOS; i++)
			{
				passString[i] = inputString;							//Set the current string to the new input string
			}
			done = false;												//We are no longer done
		}
		//else If we've looped, don't update done. We'll stop performing operations.
		else
		{
			noLoop();													//Stops draw from being called again
		}
	}
	
	for(let i = 0; i < NUM_ALGOS; i++)
	{
		Algo.UpdateDraw(passString[i], i);				//Draw the update to the screen							NOT IMPLEMENTED
	}
}