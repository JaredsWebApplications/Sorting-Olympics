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

function sleep(seconds) {
  return new Promise(resolve => setTimeout(resolve, (seconds*1000)));
}

var selection = select(inputs);
sleep(1);
console.log("just waited a whole two seconds");

/*
 * Get random element and use it
 * TODO
 * send to four algos
 * update display for current iteration
 * signal when complete (for a given algo)
 * declare ranking
*/
