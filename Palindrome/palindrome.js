/*
When given a string, return true if the string is a palindrome 
or false if the string is not.
*/

function checkPalindrome(inputString) {
 //create a var with a lower case version of the string
 var lowerCaseString = inputString.toLowerCase();
 //create a var that is the reverse of the lowercase
 //by using the JS methods to split the string into letters, reverse the array
 //and then combine the letters back into an array.
 var reverseString = lowerCaseString.split('').reverse().join('');
 //compare the two variables
 if (lowerCaseString==reverseString)
  return true;
 else
  return false;
}
