// The variable kelvin, stores the value of temperature in Kelvin
const kelvin = 300;

// Converts the value of temperature in Kelvin to Celsius
const celsius = kelvin - 273;

// Converts the value of temperature in Celsius to Fahrenheit
let fahrenheit = celsius * (9/5) + 32;
// Rounds the fahrenheit value to a whole number
fahrenheit = Math.floor(fahrenheit);

let newton = celsius * (33/100);
newton = Math.floor(newton);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);
console.log(`The temperature is ${newton} degrees Newton`);
