/************************************************************************

 *************************************************************************/

const SORT = {
	INSERTION 	: 0,
	PORE		: 1,
	MERGE		: 2,
	QUICK		: 3
}

class Algorithm {
	constructor() {
		this.InsertionSort 	= 0;
		this.PoreSort		= 0;
		this.MergeSort		= 0;
		this.QuickSort		= 0;	
	}
	Pass(stringSorting, sortType) {
		//Call the sorting algorithm we want in the following switch statement
		switch(sortType)
		{
			case SORT.INSERTION:
				
				break;
			case SORT.PORT:
				
				break;
			case SORT.MERGE:
				
				break;
			case SORT.QUICK:
				
				break;
		}
		return stringSorting;
	}
	
	UpdateDraw(stringDisplaying, index) {
		//We're going to need to output in a different location based on the index
		switch(index)
		{
			case SORT.INSERTION:
				
				break;
			case SORT.PORT:
				
				break;
			case SORT.MERGE:
				
				break;
			case SORT.QUICK:
				
				break;
		}
	}
	
	Sort(oldString) {
		//Fully sorts a string using the first algorithm we have, just so we know what we're expecting as a result when we actually care to display
		passString = this.Pass(oldString, 0);
		while(passString != oldString)
		{
			oldString = passString;
			passString = this.Pass(oldString, 0);
		}
		return passString;
	}
}
