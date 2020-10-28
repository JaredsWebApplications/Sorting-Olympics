const ORIGINAL_STRING = "5F7D8A1593B47B8";								//Initial string

var passString = new Array(  	ORIGINAL_STRING,									//An array of strings, each one will be passed into a different algorithm
								ORIGINAL_STRING,
								ORIGINAL_STRING,
								ORIGINAL_STRING);					

var inputString = "";
var expectedString = "";									//The original string and the expected string
const NUM_ALGOS = passString.length;										//Number of algorithms we're sorting with

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
		done = true;													//we're done unless an algorithm updates
		
		//Go through all algorithms
		for(let i = 0; i < NUM_ALGOS; i++)
		{
			//If the current algorithm isn't done sorting
			if(passString[i] != expectedString)
			{
				passString[i] = Algo.Pass(passString[i], i);		//Perform a pass on the algorithm
				done = false;										//An algorithm updated, we're not done yet
			}
		}
	}
	else
	{
		//Update our new input string by shifting
		inputString = inputString.substring(1, inputString.length) + inputString.substring(0,1);
		
		//Reset our algorithms
		Algo = new selectAlgorithm();
		
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
	Display.draw(passString[0], passString[1], passString[2], passString[3]);
}