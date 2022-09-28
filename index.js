const lodash = require("lodash");

const moment = require("moment");

// let a, b;

// function add(a, b) {
// console.log(a + b);
// }
// add(20, 40);

// function subtract(a, b) {
// console.log(b - a);
// }
// subtract(60, 70);
let currentdateTimeYear = moment().format('MMMM Do YYYY, h:mm:ss a');
console.log(currentdateTimeYear);
let currentDay = moment().format('dddd');
console.log(currentDay);
let currentDateAndMonth = moment().format("MMM Do YY");
console.log(currentDateAndMonth);
let valid = moment("20200101", "YYYYMMDD").fromNow();
console.log(valid);
let Invalid = moment('20201401', "YYYYMMDD").fromNow();
console.log(Invalid);
let addSevenDays = moment().add(7, 'days').calendar();
console.log(addSevenDays);
let addSevenMonth = moment().add(7, 'M').calendar();
console.log(addSevenMonth);
let addSevenYear = moment().add(7, 'Y').calendar();
console.log(addSevenYear);
let subSevenDays = moment().subtract(7, 'days').calendar();
console.log(subSevenDays);
let subSevenMonth = moment().subtract(7, 'M').calendar();
console.log(subSevenMonth);
let subSevenYear = moment().subtract(7, 'Y').calendar();
console.log(subSevenYear);
let FirstDate = moment([2014, 11, 11]);
let SecondDate = moment([2015, 09, 11]);
console.log(SecondDate.diff(FirstDate, 'days'));
let FirstDate2 = moment([2014, 11, 17]);
let SecondDate2 = moment([2015, 09, 16]);
console.log(SecondDate2.diff(FirstDate2, 'days'));

console.log(moment("2020-01-01").isAfter("2018-01-01"));
console.log(moment("2010-01-01").isAfter("2018-01-01"));

console.log(moment([2019]).isLeapYear());
console.log(moment([2020]).isLeapYear());
let character = ['a', 'b', 'c', 'd'];
console.log(lodash.chunk(character, 2));
let Compactarray = [0, 1, false, 2, '', 3];
console.log(lodash.compact(Compactarray));

var arrayFirst = [1, 2, 3, 5];
var arraySecond = lodash.concat(arrayFirst, 2, [3], [
    [4]
]);

console.log(arraySecond);
let arr1 = [1, 2];
let arr2 = [2, 3];
console.log(lodash.difference(arr1, arr2));

let suffleArr = [1, 2, 3, 4];
console.log(lodash.shuffle(suffleArr));

let sizeOfArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(lodash.size(sizeOfArr));

function cube(n) {
    return n * n * n;
}

console.log(lodash.map([4, 8], cube));