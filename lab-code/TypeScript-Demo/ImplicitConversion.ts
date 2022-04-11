
console.log("All these values below have an implicit value of false");
console.log("They are said to have a falsy value");
console.log(Boolean(''));           // false
console.log(Boolean(0));            // false     
console.log(Boolean(-0));           // false
console.log(Boolean(NaN));          // false
console.log(Boolean(null));         // false
console.log(Boolean(undefined));    // false
console.log(Boolean(false));        // false

console.log("Anything that does not have a falsy value will have a truthy value");
console.log(Boolean('cat'));        // true
console.log(Boolean(1));            // true     
console.log(Boolean({}));             // true
console.log(Boolean([]));             // true

console.log("Implicit conversion to a string when we use + with a string and non-string operand");
let a = "cat ";
console.log(a + 123);


console.log("Implicit conversion to boolean when we use non-boolean operand in logical context or with logical operators");
if ('cat') {
    console.log("this statement prints because cat converted to Boolean is true");
}

if (800) {
    console.log("this statement prints because 800 converted to Boolean is true");
}

if ('') {
    console.log("this statement DOES NOT print because '' converted to Boolean is false");
}

if (0) {
    console.log("this statement DOES NOT print because 0 converted to Boolean is false");
}


