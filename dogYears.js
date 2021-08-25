// This stores my actual age in number
const myAge = 29;

// A variable that stores Early years
let earlyYears = 2;
// Dog's early years
earlyYears *= 10.5;

// A variable that stores Later years
let laterYears = myAge - 2;

// Calculating Later years
laterYears *= 4;

// Calculates my age in dog years
const myAgeInDogYears = earlyYears + laterYears;

// Stores my name in lower case letters
const myName = 'chinenye'.toUpperCase();

console.log(`Dog's early years: ${earlyYears}`);
console.log(`Dog's later years: ${laterYears}`);

// Logs my age and the equivalent dog age
console.log(`My name is ${myName}. I am ${myAge} years old in human years, which is ${myAgeInDogYears} years old in dog years`);
