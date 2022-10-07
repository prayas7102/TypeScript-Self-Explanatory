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
log(sports.golf); // return index in enum

function joke(): string {
    return 'shalini has a unicorn startup';
}
console.log(joke());

let unionType: string | number;
unionType = 1;
unionType = "string";
// console.log(1+'j');

function addWithUnion(arg1: string | number, arg2: string | number): string | number {
    return arg1.toString() + arg2.toString();
}
console.log(addWithUnion("shalini age's is ",56));