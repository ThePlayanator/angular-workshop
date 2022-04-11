

// Using the loose equality operator ==
// With a string and numeric operand, the string is implicitly converted to a number
// then the comparison operation is performed
console.log("Comparing 2 with '2' using loose equality operator is ", ('2' == 2));

// With a boolean and numeric operand, the boolean is implicitly converted to a number
// then the comparison operation is performed. Boolean true implicitly converts to 1
// while Boolean false implicitly converts to 0
console.log("Comparing 1 with true using loose equality operator is ", (1 == true));

//Typescript prevents the comparison of different types demonstrated above
// However, you should still always use the strict equality operator as demonstrated below


// Using the strict equality operator ===
// Here the operands compared must be of the SAME type and SAME value in order 
// to evaluate to true
console.log("Comparing 2 with '2' using strict equality operator is ", ('2' === 2));
console.log("Comparing 1 with true using strict equality operator is ", (1 === true));
console.log("Comparing 2 with 2 using strict equality operator is ", (2 === 2));

