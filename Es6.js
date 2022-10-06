// map data structure::

let games = new Map();
games.set('football', 'team');
games.set('cricket', 'team');
games.set('golf', 'individual');
games.set('shooting', 'individual');

console.log(games);

let teamSport = ['football', 'polo', 'baseball'];
let individualSport = ['shooting', 'chess', 'badminton'];

let sports = new Map(
    [
        [teamSport, true],
        [individualSport,'Italy']
    ]
);
console.log(sports);
