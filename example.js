let input = "KFTVAHMLVBFG";

class S {
    constructor(container, s, e){
       this.container = container;
       this.s = s;
       this.e = e;
    }
}

function bubblesort(string){
    /*
      * bubble sort implementation
      * not needed but i think this is the basis of Gold's Pore Sort
    */

    let container = string.split(''); // can't mutate strings, create list

    for(let i = 0; i < container.length; ++i) {
        for(let j = 0; j < container.length; ++j) {
            // if the first element is greater, than switch
            if(container[j] > container[j+1]){
                let temp = container[j];
                container[j] = container[j+1];
                container[j+1] = temp;
            }
        }
        break; // break after one pass
    }
    return container.join('');
}


/*
 * this is a broken algo
 * but BubbleSort does work for breaking out for one iteration
*/

function psort(string){
    let container = string.split('');

    for(let i = 0; i < container.length; ++i) {
        for(let j = 0; j < container.length; ++j){
            if(container[j] > container[j+2] && j+2 < container.length){
                let temp = container[j];
                container[j] = container[j+2];
                container[j+2] = temp;
            }
        }
        break;
    }
    return container.join('');
}

function partition(container, low, high){
    let pivot = container[high];
    let i = low;

    for(let j = low; j < high; ++j){
        if(container[j] < pivot){
           let temp = container[i];
           container[i] = container[j];
           container[j] = temp;
           ++i;
        }
    }
   let temp = container[i];
   container[i] = container[high];
   container[high] = temp;
   return i;
}

function quicksort(container, low, high, amount){
    let p = 0;
    if(amount == 0){ return; }
    if(low < high && amount != 0){
        console.log(amount);
        p = partition(container, low, high);
        quicksort(container, low, p-1, amount-1);
        quicksort(container, p+1, high, amount-1);
    }
    return [Math.min(p-1, p+1), Math.max(p-1, p+1)]; 
}


function quickie(container, low, high) {
  function compute(container, low, high) {

    let p = 0;
    if(depth(p) == 1){ console.log("here"); return container; }

    if(low < high){
        p = partition(container, low, high);
        quickie(container, low, p-1);
        quickie(container, p+1, high);
    }     
  }
  return compute(container, 0, container.length - 1 || 1);
}

let value = "dsfsfsfsaww";
let container = value.split('');
let sorted = value.split('').sort();

let x = 0;
let y = 0;

for(let i = 0; i < 10; ++i){
    if(i == 0){
        console.log("here");
        let l = quicksort(container, 0, container.length - 1, 2);
        x = l[0];
        y = l[1];
    }
    else{
        let l = quicksort(container, x, y, 2);
        x = l[0];
        y = l[1];
    }
    console.log(container);
}

//let l = quicksort(container, 0, container.length - 1, 1)
//console.log(l);
//console.log(container)
//let g = quicksort(container, 0, 2, 1)
//console.log(container)
//console.log(g)

//let j = quicksort(container, 1, 3, 1)

//console.log(container)
//console.log(j)
