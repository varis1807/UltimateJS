//how to print
console.log("hi this is my first code after very long time!!!");

//declare variable
let a;
// defalut val of var is undefined
console.log(a);
a=10;
a=10.1;
a="hi";
console.log(a);

// variable types::=>> 1) premptive==>> number, string, boolean, null


// is prime

let num = 23;
let flag = true;
for(let div = 2; div<num; div++){
    if(num%div==0){
        flag=false;
        break;
    }
}

if(flag == true){
    console.log(num, "num is prime");
}
else{
    console.log(num, "is not prime");
}