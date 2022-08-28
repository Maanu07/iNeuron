// 1. Write a Javascript function to check whether a triangle is equilateral,isosceles or scalene

function checkTriangle(a, b, c) {
  if (a == b && b == c) return "Equilateral Triangle";
  if (a == b || b == c || a == c) return "Isosceles Triangle";
  else return "Scalene Triangle";
}

console.log(checkTriangle(10, 10, 10));

/* 2.Write a function using switch case to find the grade of a student based
on marks obtained
a. “S grade” if the marks are between 90 and 100.
b. “A grade” if the marks are between 80 and 90.
c. “B grade” if the marks are between 70 and 80.
d. “C grade” if the marks are between 60 and 70.
e. “D grade” if the marks are between 50 and 60.
f. “E grade” if the marks are between 40 and 50.
g. “Student has failed” if the marks are between 0 and 40.
h. Else output “Invalid marks”.    */

function findGrade(marks) {
  switch (true) {
    case marks >= 90 && marks <= 100:
      console.log("S");
      break;
    case marks >= 80 && marks < 90:
      console.log("A");
      break;
    case marks >= 70 && marks < 80:
      console.log("B");
      break;
    case marks >= 60 && marks < 70:
      console.log("C");
      break;
    case marks >= 50 && marks < 60:
      console.log("D");
      break;
    case marks >= 40 && marks < 50:
      console.log("E");
      break;
    case marks >= 0 && marks < 40:
      console.log("Student has failed");
      break;
    default:
      console.log("Invalid marks");
  }
}

findGrade(35);

// 3. Write a JavaScript program to find the sum of the multiples of 3 and 5 under 1000

function sumOfMultiples() {
  sum = 0;
  i = 1;
  while (i < 1000) {
    if (i % 3 == 0 && i % 5 == 0) sum += i;
    i += 1;
  }
  console.log(sum);
}

sumOfMultiples();

// 4. Write a program to find the factorial of all (prime) numbers between a given range . Range will be passed as 2 values in the function parameters. eg- if it is needed to find the values for numbers 1-100, then function declaration can look like - function (prime)(1,100).

// check if prime or not
function isPrime(num) {
  i = 2;
  while (i < num) {
    if (num % i == 0) return false;
    i += 1;
  }
  return true;
}

// calculate factorial
function factorial(num) {
  fact = 1;
  for (let i = 1; i <= num; i++) {
    fact *= i;
  }
  return fact;
}

function factorialOfPrime(start, end) {
  for (let i = start; i <= end; i++) {
    const prime = isPrime(i);
    if (prime) {
      console.log(factorial(i), i);
    }
  }
}

factorialOfPrime(1, 100);
