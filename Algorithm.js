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
		this.PoreSort		= false;
		this.MergeSort		= 0;
		this.QuickSort		= 0;
	}
	Pass(stringSorting, sortType) {
		let container = stringSorting.split(''); // can't mutate strings, create list

		//Call the sorting algorithm we want in the following switch statement
		switch(sortType)
		{
			case SORT.INSERTION:
				//If we're not at the end of the string
				if(this.InsertionIndex < stringSorting.length)
				{
					let x = container[this.InsertionIndex];	//Store the current starting index
					let j = this.InsertionIndex - 1;		//j stores the index location of the element before our starting index
					
					//While we're not out of bounds and we're increasing in size
					while(j >= 0 && container[j] > x)
					{
						container[j + 1] = container[j];	//push this element back
						j = j - 1;							//reduce j by 1
					}
					container[j + 1] = x;					//replace the second smallest element with x
					this.InsertionIndex += 1;				//Increment insertion index
				}
				break;
			case SORT.PORE:
				let index 	= 0 + this.PoreSort;	//Decide whether we're sorting the odd or even numbers
				let temp	= "";					//Used only for swapping
				
				//While we're making comparisons inside of bounds
				while(index + 1 < stringSorting.length)
				{
					//If our current value is greater than the next value, swap them
					if(container[index] > container[index + 1])
					{
						temp = container[index + 1];
						container[index + 1] = container[index];
						container[index] = temp;
					}
					//Move to the next comparison
					index = index + 2;
				}
				this.PoreSort = !this.PoreSort;
				break;
			case SORT.MERGE:
				break;
			case SORT.QUICK:
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
