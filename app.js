var age = 2;
var names = "prayas";
var arr = ['jatin', 3, true];
var arrNames = ['dog', 'cat', 'shalini'];
var arrAge = [1, 23, 4];
var arr1 = ['andwemet', 55, false];
var sports;
(function (sports) {
    sports[sports["cricket"] = 0] = "cricket";
    sports[sports["basketball"] = 1] = "basketball";
    sports[sports["golf"] = 2] = "golf";
})(sports || (sports = {}));
;
function log(val) {
    console.log(val);
}
log(sports[0]);
log(sports.golf); // return index in enum
function joke() {
    return 'shalini is a girl';
}
console.log(joke());
