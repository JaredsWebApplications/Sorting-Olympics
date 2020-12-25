/*****************************************************************************
* * * * * * * * * * * * * *	QUICKSORT.JS * * * * * * * * * * * * * * * * * * *
******************************************************************************
* CREATED BY : JARED DYRESON * jareddyreson@csu.fullerton.edu
             : BRIAN LUCERO  * 13rianlucero.csu.fullerton.edu
*************************************************************************
*
* This file contains the implementation of Quicksort
*
**************************************************************************/
/* Sourced from https://www.techiedelight.com/iterative-implementation-of-quicksort/ */

class Pair {
  /* Tuple like class */
  constructor(s, e){
    this.start = s;
    this.end = e;
  }
  unpackable(){
    /*
     * can be used to unpack the class
    */
    return [this.start, this.end];
  }
};

function partition(container, start, end){
  // Central elements; all things to left is less than and all things right
  // is greater than or equal to it
  let pivot = container[end];
  let pIndex = start;
  for(let i = start; i < end; ++i){
    // Swap on the left side
    if(container[i] <= pivot){
      [container[i], container[pIndex]] = [container[pIndex], container[i]];
      ++pIndex;
    }
  }
  // The last element of the sub array range swaps with the
  [container[pIndex], container[end]] = [container[end], container[pIndex]];
  return pIndex;
}

function quickie(container, amount){
  let stack = [];
  let start = 0;
  let end = container.length - 1;
  stack.unshift(new Pair(start, end));
  // Make sure the stack is still containing elements
  while(stack.length > 0){
    // After one pass, just do a hard quit
    if(--amount < 0) { return; }
    // use the las
    [start, end] = stack.pop().unpackable();
    let pivot = partition(container, start, end);
    if(pivot - 1  > start){
      stack.push(new Pair(start, pivot - 1));
    }
    if(pivot + 1 < end){
      stack.push(new Pair(pivot + 1, end));
    }
  }
}
