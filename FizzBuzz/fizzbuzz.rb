=begin
This is Fizzbuzz in Ruby.
The rules of Fizzbuzz are:
-Print all numbers from 1 until the var topNum unless the number matches one of the conditions below
-if the number is divisble by 3 print Fizz
-if the number is divisble by 5 print uzz
-if the number is divisble by 3 and 5 print fizzbuzz
rescue 

=end => e
  
end

def fizzbuzz(topNum)
  arr = []
  (1..topNum).each do |n|
    #look for numbers divisble by 15 first, otherwise fizzbuzz will never print.
    if ((n % 3 == 0) && (n % 5 == 0))
      puts "FizzBuzz"
    elsif (n % 3 == 0)
      puts "Fizz"
    elsif (n % 5 == 0)
      puts "Buzz"
    #print the number if the number is not divisible by
    else
      puts n
    end
  end
  return arr
end

fizzbuzz(100)