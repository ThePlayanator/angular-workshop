
let employees = [
    { 
        firstName: 'Peter',
        lastName: 'Parker',
        age: 33,
        isMarried: false,
    },
    { 
        firstName: 'Diana',
        lastName: 'Prince',
        age: 40,
        isMarried: true,
    },
    { 
        firstName: 'Tony',
        lastName: 'Stark',
        age: 43,
        isMarried: false,
    },    
];

console.log("Employee array contents : ", employees);

/* Q1: 
Using the array map method, create a new string array from employees whose
contents are as follows:
[
    'Peter Parker is 33 years old and is married',
    'Diana Prince is 40 years old and is single',
    'Tony Stark is 43 years old and is married'
]
*/



/* Q2: 
Using the array filter method, locate all the employees who are single
*/