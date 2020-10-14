function conversion(string){
    for(var i = 0; i < string.length; ++i){
        let x = string[i].charCodeAt(0);
        if(x >= 65 && x <= 70){
            console.log((65 - x) + 10);
        } else {
            console.log(string[i]);
        }
    }
}

function compare(a, b){
    return (a < b) ? -1 : (a > b) ? +1 : 0;
}

let poresortinput = "KFTVAHMLVBFG";
let porecontainer = poresortinput.split('');

function poreSort(string){
    let container = string.split('');
    for(var i = 0; i < container.length; ++i){
        if(i+2 < container.length){
            console.log(i, string[i], i+2, string[i+2], "--->", i+2, string[i+2], i, string[i]);
           let temp = container[i+2];
           if(temp < string[i]){
                container[i+2] = container[i];
                container[i] = temp;
           }
        }
    }
    return container.join('')
}



let string = poreSort(poresortinput)
console.log(string)
//console.log(porecontainer.sort().join(''))
