let moment = require('moment');
/*
let date = new Date();

let months = ['Jan', 'Feb'];

console.log(date.getMonth());
*/

/*
let date = moment();
date.add(100, 'years').subtract(9, 'months');
console.log(date.format('MMM Do, YYYY'));
*/

//10:35am --> unpadded
let date = moment();
console.log(date.format('h:mm a'));
