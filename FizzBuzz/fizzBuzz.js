/*FizzBuzz in JS
Print every number up to the var topNum.
However, if a number is divisible by 3, print "Fizz", if divisible by 5 print "Buzz", or if divisible by 15 print "FizzBuzz".
*/

function fizzBuzz(topNum) {
	for (i = 1; i < topNum; i++)
		//Find if a num is divisble by 15 first. Otherwise, every "FizzBuzz" will just be "Fizz"
		if (i % 15 == 0 )	
		    console.log("FizzBuzz");
		//Due to needing to find things divisble by 15 first, I like to see if a number is divisble by 5 next. However, you could easily switch the order of divisble by 3 or 5.
		else if (i % 5 == 0) {
			console.log("Buzz");
		}
		//Divisble by 3
		else if (i % 3 == 0) {
			console.log("Fizz");
		}
		//Print all numbers that are not divisble by 3, 5, or 15.
		else if (i > 0) {
			console.log(i);
		}
}

fizzBuzz(100);
