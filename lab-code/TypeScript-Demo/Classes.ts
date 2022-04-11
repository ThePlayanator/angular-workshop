
class Person {

    // properties / fields of the class
    name: string;
    age: number;
    isMarried: boolean;

    // constructor initializes the properties
    constructor(name: string, age: number, isMarried: boolean) {
        this.name = name;
        this.age = age;
        this.isMarried = isMarried;
    }

    getPersonDetails(): string {
        let maritalStatus: string;
        if (this.isMarried)
            maritalStatus = "is married";
        else
            maritalStatus = "is single";

        return `${this.name} is ${this.age} years old and ${maritalStatus}`;
    }

    increaseAge(amount: number): void {
        this.age += amount;
    }

}

// creating an object from the class using the new keyword
// this calls the constructor to initialize the class properties
let firstPerson: Person = new Person("Peter Parker", 22, false);
let secondPerson: Person = new Person("Tony Stark", 45, true);
console.log(firstPerson.getPersonDetails());
secondPerson.increaseAge(30);
console.log(secondPerson.getPersonDetails());



class Car {
    // properties can also be initialized in this way
    country = 'USA';
    readonly age: number;

    constructor(age: number) {
        // no need to initialize country in here
        // because it is initialized during its declaration
        this.age = age;
    }

    increaseAge(amount: number): void {
        // The statement below will not be allowed
        //this.age += amount;
    }

}


// There are 3 access specifiers:
// private, protected and public (default)


class Human {

    // no specifier means it is public by default
    name: string;
    private age: number;
    protected isMarried: boolean;

    constructor(name: string, age: number, isMarried: boolean) {
        this.name = name;
        this.age = age;
        this.isMarried = isMarried;
    }

    getHumanDetails(): string {
        let maritalStatus: string;
        if (this.isMarried)
            maritalStatus = "is married";
        else
            maritalStatus = "is single";

        return `${this.name} is ${this.age} years old and ${maritalStatus}`;
    }

    increaseAge(amount: number): void {
        this.age += amount;
    }

}

let human1 = new Human("Peter Parker", 22, false);
human1.name = "Clark Kent"; // possible because human1 is public
console.log("After changing human1.name")
console.log(human1.getHumanDetails());

// This statement below will not compile because age is private
// human1.age = 32;

// This statement below will not compile because isMarried is protected
//human1.isMarried = true;

class Employee extends Human {

    employeeId: string;

    constructor(name: string, age: number, isMarried: boolean, employeeId: string) {
        // call the constructor of the parent / super class
        super (name, age, isMarried);
        this.employeeId = employeeId;
    }

    doSomeStuff() {
        // can access isMarried because it is protected
        this.isMarried = false;
        // this code below will not compile because age is private
        //this.age = 15;

        // however we can call method in parent class that 
        // access the age property
        super.increaseAge(15);
    }

    // override method of the same name from parent class
    getHumanDetails(): string {
        let finalString = super.getHumanDetails();
        finalString += " and has employee id : " + this.employeeId;
        return finalString;
    }
}

let employee1 = new Employee("Thor", 200, false, "A12345");
// this is possible since employeeId is public
employee1.employeeId = "B999";
console.log(employee1.getHumanDetails());


class User {

    /* Parameter properties provide a shortcut for 
    declaring properties and initializing them in a constructor
     */

    constructor(
        public name: string,
        private surname: string,
        protected age: number
    ) { }

    // The declaration above is equivalent to the declaration below
    /* 
        name: string;
        surname: string;
        age: number;
    
        constructor(name: string, surname: string, age: number) {
            this.name = name;
            this.surname = surname;
            this.age = age;
        }
    
      */
}

let user1 = new User("peter", "parker", 32);
let user2 = new User("bruce", "banner", 40);




