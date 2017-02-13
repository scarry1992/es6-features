//let [firstName, lastName] = ['Sergei', "Buncevich"];
//let [,,third] = 'The word third can be taken'.split(' ');

//let [first, second, ...rest] = 'The word third can be taken'.split(' ');
//let [first = 'Yes', second = 'name', ...rest] = [];
let [first, second = (()=>Date.now()+'-visitor')(), ...rest] = ['Vasya'];

export {first, second, rest};