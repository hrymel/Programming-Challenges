/*
Solution to finding a century if given the year.
This code assumes that it will be given a year greater than 0 and less than 10,000.
*/

function centuryFromYear(year) {
//checks to see if the year is a whole number when it's divided by 100.
//if it is a whole number with no remainder when divided by zero, the that is the century.
 century = year/100;
  if (century%1 == 0)
   return century
  else
  	//if year/100 is not a whole number, round the number and add 1.
   return Math.floor(year/100) + 1;
}
