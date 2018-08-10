# Given a year, return the century it is in. The first century spans from the year 1 up to and including the year 100, 
# the second - from the year 101 up to and including the year 200, etc.

def centuryFromYear(year):
    century = math.floor(year/100)
    print(century)
    if (year % 100 == 0):
        return century
    else:
        return century + 1
    
