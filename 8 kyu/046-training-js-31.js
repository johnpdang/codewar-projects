/* ==============================
Training JS #31: methods of arrayObject---isArray() indexOf() and toString()
https://www.codewars.com/kata/training-js-number-31-methods-of-arrayobject-isarray-indexof-and-tostring/train/javascript
============================== */

function blackAndWhite(arr){
  return        !Array.isArray(arr)?"It's a fake array":
  arr.includes(5)&&arr.includes(13)?"It's a black array":"It's a white array"

}
