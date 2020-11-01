class Pair {
  constructor(s, e){
    this.start = s;
    this.end = e;
  }
  unpackable(){
    return [this.start, this.end];
  }
};

function partition(container, start, end){
  let pivot = container[end];

  let pIndex = start;

  for(let i = start; i < end; ++i){
    if(container[i] <= pivot){
      [container[i], container[pIndex]] = [container[pIndex], container[i]];
      ++pIndex;
    }
  }
  [container[pIndex], container[end]] = [container[end], container[pIndex]];
  return pIndex;
}

function quickie(container, length, amount){
  let stack = [];

  let start = 0;
  let end = length - 1;

  stack.unshift(new Pair(start, end));

  while(stack.length > 0){
    if(--amount < 0){ return; }
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
