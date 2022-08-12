// console.log('app is running!');

// // Assignment -3
// const temp = 20;

// // F = (9C + (32 *5))/5

// const result = (9 * temp + 32 * 5) / 5;

// console.log(temp, 'C is equal to', result, 'F');

// // C = (5 * (F-32))/9

// const tempF = Number(prompt('Enter temperature in F'));

// const resultC = (5 * (tempF - 32)) / 9;

// console.log(tempF, 'F is equal to', resultC, 'C');

// Assignment-4
// Write a JavaScript program to display the difference between a given number and 20, if the number is greater than 20 display double the absolute difference.
// Examples:
// number is 15 ==> display 5 as 20-15 = 5
// number is 35 ==> display 30 as (35-20) * 2 = 30

// const number = Number(prompt('Enter a number'));

// // 30console.log(number < 20);

// number < 20 && console.log(20 - number);

// number > 20 && console.log((number - 20) * 2);

// const number = Number(prompt('Enter a number')) || 10;

// console.log(number ** 2);

// assigment-1

// const year = Number(prompt('Enter a year'));

// const condition1 = year % 400 == 0;
// console.log(condition1);

// const condition2 = year % 4 == 0;
// console.log(condition2);

// const condition3 = year % 100 == 0;
// console.log(condition3);

// const isLeapYear = condition1 || (condition2 && !condition3);
// console.log(year, 'is a leap year?', isLeapYear);

// assigment
// a,b,c are 3 sides of a triangle.
// tell us type of this triangle (equilateral, isosceles, scalene)

const a = 5;
const b = 5;
const c = 5;
const condition1 = a == b && b == c && a == c;
condition1 && console.log(a, b, c, 'is a equilateral triangle');

const condition2 = a == b || b == c || a == c;
// const condition2 = a == b || (a == c && b == c) || (a == b && a == c) || b == c;
!condition1 && condition2 && console.log(a, b, c, 'is a isosceles triangle');

!condition1 && !condition2 && console.log(a, b, c, 'is a scalene triangle');
