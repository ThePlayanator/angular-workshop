
// A function is declared as a property of an object
// This function is known as a method

let anotherPerson = {
    firstName : 'John',
    lastName: 'Doe',
    addTwoNumbers: function (a: number, b: number) {
        return a + b;
    }
};

console.log("3 + 5 gives us ", anotherPerson.addTwoNumbers(3, 5));


/* A method of an object can access properties of that same object
For that situation, the name of the property must be preceded with the keyword this 
*/

let finalPerson = {
    firstName: 'John',
    lastName: 'Wick',
    greet: function () {
        console.log('Hello, World!');
    },
    getFullName: function () {
        let fullName = this.firstName + ' ' + this.lastName;
        return fullName;
    }
};

console.log("The full name of finalPerson is ", finalPerson.getFullName());


// These are some examples of useful String methods
// There are many more useful methods available  
let fruits = "Apple, Banana, Kiwi";
let firstPart = fruits.slice(7, 13);
console.log("firstPart is ", firstPart);

let text = "Please visit Microsoft!";
let newText = text.replace("Microsoft", "Angular");
console.log("newText is ", newText);

let upperText = text.toUpperCase();
let lowerText = text.toLowerCase();

console.log("Original text fully in uppercase is ", upperText);
console.log("Original text fully in lowercase is ", lowerText);

let longText = "      Hello World!      ";
let trimText = longText.trim();
console.log("longText without spaces in front and at the back is ", "*"+trimText+"*");

let firstChar = text.charAt(2);
console.log("firstChar is ", firstChar);

let microsoftLocation = text.indexOf("Microsoft");
console.log("Microsoft is found in text at location ", microsoftLocation);


// some useful Number methods

let someVal:number = 3.129;

let someValString = someVal.toString();
console.log("someValString type is ",typeof someValString);
console.log("someValString value is ",someValString);

// Another simple way to convert a number to a string is to 
// use the + operator with another string. This automatically
// converts the number to a string.

let someNum1 = 3;
let someNum2 = 5;
let someResult = "" + someNum1 + someNum2;
console.log("Adding two numbers and a string with the + operator gives ", someResult);


let someValFixed = someVal.toFixed(2);
console.log("someValFixed type is ",typeof someValFixed);
console.log("someValFixed value is ",someValFixed);

// To convert a string to a number, we can use the global JavaScript methods 

let salaryString:string = "245.56";
let ageString:string = '35';

let salary = parseFloat(salaryString);
console.log("salary type is ",typeof salary);
console.log("salary value is ", salary);

let age = parseInt(ageString);
console.log("age type is ",typeof age);
console.log("age value is ", age);

// The JavaScript Math object provides many useful methods for 
// basic mathematical operations

console.log("Rounding 4.6 to the nearest integer gives us ", Math.round (4.6));
console.log("Rounding 4.6 down to the nearest integer gives us ", Math.floor (4.6));
console.log("Truncating the decimal part of  3.14123 gives us ", Math.trunc (3.14123));



