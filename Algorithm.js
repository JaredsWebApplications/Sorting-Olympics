/************************************************************************

 *************************************************************************/

const SORT = {
	INSERTION 	: 0,
	PORE		: 1,
	MERGE		: 2,
	QUICK		: 3
}

class selectAlgorithm {
	constructor() {
		this.InsertionIndex = 1;
		this.PoreSort		= 0;
		this.MergeSort		= 0;
		this.QuickSort		= 0;
	}
	Pass(stringSorting, sortType, numPasses) {
		let container = stringSorting.split(''); // can't mutate strings, create list

		//Call the sorting algorithm we want in the following switch statement
		switch(sortType)
		{
			case SORT.INSERTION:
				if(this.InsertionIndex < stringSorting.length)
				{
					let x = container[this.InsertionIndex];
					let j = this.InsertionIndex - 1;
					while(j >= 0 && container[j] > x)
					{
						container[j + 1] = container[j];
						j = j - 1;
					}
					container[j + 1] = x;
					this.InsertionIndex += 1;
				}
				break;
			case SORT.PORE:
				break;
			case SORT.MERGE:
				break;
			case SORT.QUICK:
                //if(numPasses == 0){
                    //container = quicksort(container, 0, container.length - 1, 1);
                //}
				break;
		}
		//return stringSorting;
		return container.join('');
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
