/* ==============================
Abbreviate a Two Word Name
https: //www.codewars.com/kata/abbreviate-a-two-word-name/train/javascript

Description:
Write a function to convert a name into initials.This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot seperating them.

It should look like this:

Sam Harris => S.H

Patrick Feeney => P.F
============================== */

function abbrevName(name) {
  name
      .split(' ')
      .map(name => name[0].toUpperCase())
      .join('.')
}