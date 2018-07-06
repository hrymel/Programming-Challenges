#Given a two-digit integer n. Return the sum of its digits.

def addTwoDigits(n)
    digits = n.to_s.split('')
    return digits[0].to_i + digits[1].to_i
end