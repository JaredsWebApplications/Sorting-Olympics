let input = "KFTVAHMLVBFG";

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


let s = input.split('').sort();
while(input != s.join('')){
    input = bubblesort(input)
    console.log(input);
}
