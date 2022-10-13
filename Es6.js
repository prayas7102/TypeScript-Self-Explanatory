// map data structure::

// 1.
let games = new Map();
games.set('football', 'team');
games.set('cricket', 'team');
games.set('golf', 'individual');
games.set('shooting', 'individual');
// console.log(games);

// 2.
let teamSport = ['football', 'polo', 'baseball'];
let individualSport = ['shooting', 'chess', 'badminton'];
let sports = new Map(
    [
        [teamSport, true],
        [individualSport, 'Italy']
    ]
);
// console.log(sports);


// set data structure::

let person = new Set(individualSport);
// console.log(person);

person.add('chess');
person.add('kabaddi');

// removes duplicates
// console.log(person);
person.clear();

// Destructuring
let [first, , second] = ['CPP', 'Python', 'Java'];
// console.log(first);
// console.log(second);

// OOPs
function rectangle(width, length) {
    this.width = width;
    this.length = length;
}
let rect = new rectangle(20, 30);
console.log(rect.length);

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
class Student extends Person {
    constructor(name, age, school) {
        super(name, age);
        this.school = school;
    }
    getName() { return this.name; }
    setName(name) { this.name = name; }
}
let xyz = new Person('rahul', 89);
let pqr = new Student('abhay', 6, 'NCS');
console.log(pqr);
console.log(pqr.getName());
pqr.setName('prayas');
console.log(pqr.getName());

// Generator function
function* myFunction(val){
    yield val;
    yield val+1;
}
let gen=myFunction(10);
console.log(gen.next());
console.log(gen.next()); 