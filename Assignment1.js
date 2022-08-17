// 1. Write a program to find whether a given year is a leap year or not.

function leapYear(year) {
  if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) return "Leap year";
  else return "Not a leap year";
}
console.log(leapYear(2000));

/* 2. Write a JavaScript program to convert temperatures to and from Celsius,
Fahrenheit.
[ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in
Fahrenheit ]
Expected Output :
60°C is 140 °F
45°F is 7.222222222222222°C */

function toCelsius(temp) {
  return ((temp - 32) / 9) * 5;
}
function toFahr(temp) {
  return (temp * 9) / 5 + 32;
}
console.log(toCelsius(108));
console.log(toFahr(42.22));

// 3. Write a program to find the factorial of a number.

function factorial(n) {
  fact = 1;
  for (let i = n; i >= 1; i--) {
    fact *= i;
  }
  return fact;
}
console.log(factorial(5));
