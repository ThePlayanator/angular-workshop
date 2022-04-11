
// Declaring variables with explicit annotation using :

// Declare and assign later using let
let num1: number;
num1 = 23;

// Declare and assign using var
// not recommended, used only in older code
var oldNum: number;
oldNum = 15; 

// Declare and assign in a single statement
// floating point value
let num2: number = 9.3789;

// Declare and assign two (or more variables) in a single statement
let num3: number = 100, num4: number = 200;

// Declare binary, octal and hex numbers
let binaryNum: number = 0b011011;
let octalNum: number = 0o72;
let hexadecimal: number = 0XA;

//Boolean type
let isFast: boolean = true;

// null and undefined type, equivalent to in JS
let nothingHere: null = null;
let nothingKnown: undefined = undefined;

// String type, can be enclosed in either single or double quotes
let name1: string = 'Peter';
let name2: string = "Parker";

// There are standard escape characters for \n for new line and \t for tab
console.log("This is the first line \nThis is the second line");
console.log("Col1 \t Col2 \t Col3");

// If you need to include both single and double quotes in your string
// you also need to either use escape characters \' or  \"
console.log("This is a \"special\" project. It's really cool !");



// The ES6 string template allows us to work with strings in a more flexible way.
// It allows us to create multiline strings
// and include double and single quotes without the need for escape characters
let multilineText = 
`
This text can contain "double quotes"
and 'single quotes' and
can span multiple lines
I mean ... how cool is that ???
`;

console.log(multilineText);

// We can also include variables directly into the string using string
// interpolation syntax

let firstName = 'Peter', lastName = 'Parker';

// Without using ES6 string template
let sayHi = 'Hi ' + firstName + ", your last name is " + lastName;
console.log(sayHi);

//Using ES6 string template with interpolation syntax
// no need for so many + operators !!
sayHi = `Hi ${firstName}, your last name is ${lastName}`;
console.log(sayHi);


// Once the type of a variable has been fixed
// you cannot assign values of a different type to it
// Uncomment the code below to see the compiler errors

// name1 = 35;
// num3 = 'Jane';
// isFast = 22;

// Automatically infers that num5 is a number type
let num5 = 32;
// Attempting to assign a value of a different type
// will again result in an error
// num5 = 'spiderman';

// Automatically infers that name3 is a number type
let name3 = 'john';
// Attempting to assign a value of a different type
// will again result in an error
// name3 = false;

const myFirstVal = 35;
// Attempting to reassign another value, even of the correct
// type will result in an error
// myFirstVal = 10;


// Variables of any type
// can have any value assigned to them
let special1: any = 35;
console.log("The type of special1 is now : ", typeof special1);
special1 = 'cool';
console.log("The type of special1 is now : ", typeof special1);
special1 = false;
console.log("The type of special1 is now : ", typeof special1);


// If no type is specified for a declared variable, 
//TypeScript infers any
let special2;
special2 = 35;
special2 = 'cool';

// Array type

let firstArray: string[] = ['Java','Python','JavaScript'];

let secondArray: number[] = [];
secondArray[0] = 22;
secondArray[1] = 35;
console.log("First element of secondArray is : ", secondArray[0]);
console.log("Second element of secondArray is : ", secondArray[1]);

// Can use any of the JavaScript array methods and properties
secondArray.push(50);
console.log("Content of secondArray after pushing in 50 is : ", secondArray);
secondArray.push(90);
console.log("Content of secondArray after pushing in 90 is : ", secondArray);
console.log("Popping secondArray gives us the value : ", secondArray.pop());
console.log("The content of secondArray after a pop is : ", secondArray);
console.log("Number of items in secondArray is : ",secondArray.length);
