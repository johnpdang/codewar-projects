/* ==============================
Remove First and Last Character
https: //www.codewars.com/kata/remove-first-and-last-character/train/javascript

Description:
It 's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You'
re given one parameter, the original string.You don 't have to worry with strings with less than two characters.

============================== */

function removeChar(str) {
  return str.slice(1, -1);
}
