/* ==============================
Even or Odd
https: //www.codewars.com/kata/even-or-odd/train/javascript

Description:
Create a function (or write a script in Shell) that takes an integer as an argument and returns "Even"
for even numbers or "Odd"
for odd numbers.
============================== */

function even_or_odd(number) {
  return number % 2 == 0 ? "Even" : "Odd"
}