// https: //www.codewars.com/kata/57fb09ef2b5314a8a90001ed/
// Replace all vowel to exclamation mark in the sentence.aeiouAEIOU is vowel.

function replace(s) {
    return s.replace(/[aeiou]/gi, '!');
}