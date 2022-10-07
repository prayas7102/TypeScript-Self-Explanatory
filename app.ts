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
function log(val: any) {
    console.log(val);
}
log(sports[0]);
log(sports.golf); // return index in enum

function joke(): string {
    return 'shalini is a girl';
}
console.log(joke());