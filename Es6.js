// map data structure::

// 1.
let games = new Map();
games.set('football', 'team');
games.set('cricket', 'team');
games.set('golf', 'individual');
games.set('shooting', 'individual');
console.log(games);

// 2.
let teamSport = ['football', 'polo', 'baseball'];
let individualSport = ['shooting', 'chess', 'badminton'];
let sports = new Map(
    [
        [teamSport, true],
        [individualSport,'Italy']
    ]
);
console.log(sports);


// set data structure::

let person = new Set(individualSport);
console.log(person);

person.add('chess');
person.add('kabaddi');

console.log(person); // removes duplicates
person.clear();
