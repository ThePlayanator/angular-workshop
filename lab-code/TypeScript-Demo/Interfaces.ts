// Defining an interface
// This contains properties as well as methods
interface DoProgramming {
    name: string;
    age: number;
    writeCode(a: number) : number;
}

// using an interface definition as a type 

let programmer1: DoProgramming = {
    name : 'Bill Gates',
    age: 58,
    writeCode(a: number) : number {
        return a + 10;
    }
}
console.log(programmer1.name);
console.log(programmer1.writeCode(10));


// having a class implement an interface

class CoolProgrammer implements DoProgramming {

    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    writeCode(a: number) : number {
        return a + 10;
    }

}

let coolProg1 = new CoolProgrammer("ada lovelace",200);
