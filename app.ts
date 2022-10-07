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
console.log(addWithUnion("shalini age's is ", 56));

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