let singleQuotes = 'single quotes ki string';
let doubleQoutes = "double quotes ki string";

console.log(singleQuotes);
console.log(doubleQoutes);

let atIdx = singleQuotes.charAt(2);
let subStr = singleQuotes.substring(2,8);
console.log(atIdx);
console.log(subStr);

//split
let arrStr = singleQuotes.split("i");
arrStr.join("$");
console.log(arrStr);