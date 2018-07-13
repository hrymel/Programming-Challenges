/**
Given integers a and b, determine whether the following pseudocode results in an infinite loop

while a is not equal to b do
  increase a by 1
  decrease b by 1
*/

function isInfiniteProcess(a, b) {
    if (a+1 == b || a > b || (a-b)%2 != 0)
        return true;
    else 
        return false;
}
