//array declare
// let arr=[]

let array = [1,2,3,4,5];
console.log(array);
console.log(array.length);
let i =0;
while(i< array.length){
    console.log("ele at idx", i, "is", array[i]);
    i++;
}

//push , unshift

array.push("last val");
array.unshift("first value");
console.log(array);

//shift, pop
array.shift();
array.pop();
console.log(array);

// slice==>
// start index, ending index
let partOfArray = array.slice(2,4);

