/*
Given a two-digit integer n. Return the sum of its digits.
*/

function addTwoDigits(n) {
    var str = n.toString().split("");
    return parseInt(str[0]) + parseInt(str[1]); 
}
