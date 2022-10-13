//////////////////////////////////////////////////////////////////////////////
// TypeScript Fundamentals
//////////////////////////////////////////////////////////////////////////////

let age: number = 2;
let names: string = "prayas";
let arr: any[] = ['jatin', 3, true];
let arrNames: string[] = ['dog', 'cat', 'shalini'];
let arrAge: number[] = [1, 23, 4];
let arr1: [string, number, boolean] = ['andwemet', 55, false];

enum sports {
    cricket,
    basketball,
    golf
};
function log(val: any): void {
    console.log(val);
}
log(sports[0]);
log(sports.golf); // return index in enum = 2

function joke(): string {
    return 'shalini has a unicorn startup';
}
console.log(joke());

let unionType: string | number;
unionType = 1;
unionType = "string";
// console.log(1+'j'); is valid in js

// | operator
function addWithUnion(arg1: string | number, arg2: string | number): string | number {
    return arg1.toString() + arg2.toString();
}
console.log(addWithUnion("shalini age is ", 56));

type StringOrNumber = string | number;
function addWithType(arg1: StringOrNumber, arg2: StringOrNumber): StringOrNumber {
    return arg1.toString() + arg2.toString();
}
console.log(addWithUnion("shalini's father age is ", 80));

// null & undefined type
function testFunc(test: null | number) {
    console.log(test)
}
// testFunc(); is invalid
// testFunc(80);
testFunc(null);

// ? operator
function testFunc1(a: string, b: string = "Singh ", c?: string): void {
    console.log(a + b + c);
}
// testFunc1(); is invalid
testFunc1('Shalini ', 'Shawl ');
testFunc1('Shalini ');

// ... in fuction parameter
function testFunc2(a: string, ...remaing: string[]) {
    return a + remaing.join(" ");
}
let x = testFunc2('humpty', ' dumpty', 'sat', 'on', 'a wall');
console.log(x)

//////////////////////////////////////////////////////////////////////////////
// TypeScript GENERICS
//////////////////////////////////////////////////////////////////////////////

function identity<T>(arg: T): T {
    return arg;
}
let a = identity('anyString')
let b = identity<number>(10)
console.log(a);
console.log(b);

//////////////////////////////////////////////////////////////////////////////
// TypeScript INTERFACES 
//////////////////////////////////////////////////////////////////////////////

interface Iemployee {
    readonly id: number;
    name?: string;
    age: number;
}
// IMPORTANT: use readonly for properties and use const for variables.
let infosys: Iemployee = { id: 1, age: 8 }
console.log(infosys);

//////////////////////////////////////////////////////////////////////////////
// TypeScript OOPS & INTERFACES
//////////////////////////////////////////////////////////////////////////////

// You can use an implements clause to check that a class 
// satisfies a particular interface. An error will be issued 
// if a class fails to correctly implement it:

interface IPrint {
    print(): any;
}
// Ts does'nt support multiple inheritence with the help of so 
// classes, so interface are used to iplement multiple inheritence 

interface IVariable {
    printTwo(): any;
}
function printClass(a: IPrint) {
    a.print();
}
class ClassA implements IPrint, IVariable {
    print() { console.log('ClassA.print()') }
    printTwo() { console.log('ClassA.print()') }
}
class ClassB implements IPrint {
    print() { console.log('ClassB.print()') }
}

let classA = new ClassA();
classA.print();

//////////////////////////////////////////////////////////////////////////////
// TypeScript Modules
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
// TypeScript OOPS 
//////////////////////////////////////////////////////////////////////////////

class SimpleClass {
    // --strictPropertyInitialization
    // The strictPropertyInitialization setting controls whether class fields 
    // need to be initialized in the constructor.
    private id: number;
    name: string;
    // readonly
    // Fields may be prefixed with the readonly modifier. This 
    // prevents assignments to the field outside of the constructor.
    readonly age: number;
    static wife: boolean = true;
    static staticFunc() {
        console.log('static function called')
    }
    // constructor
    constructor(_name: string, _id: number, _age: number) {
        this.id = _id;
        this.name = _name
        this.age = _age;
    }
    print(): void {
        console.log(`id:: ${this.id}`);
    }
}
let exClass = new SimpleClass('JaiHind', 222, 40);
// exClass.id = 1; is invalid
// exClass.age = 10; is invalid
exClass.name = 'Hi'; // is valid
console.log(exClass.name, exClass.age)// is valid
exClass.print();
SimpleClass.staticFunc();
console.log(SimpleClass.wife);

//////////////////////////////////////////////////////////////////////////////
// TypeScript Abstract Class 
//////////////////////////////////////////////////////////////////////////////

abstract class AbstractClass {
    abstract getData(): string;
}
class NewClass extends AbstractClass {
    getData(): string {
        return ('muh meh lega? = ');
    }
}
class BabyClass extends NewClass {
    getData(): string {
        return (`${super.getData()} nahi`);
    }
}
let exObject = new NewClass();
console.log(exObject.getData());
let exObject1 = new BabyClass();
console.log(exObject1.getData());