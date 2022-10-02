# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.


num1 = 7
# Expected output: '7 is odd'
num2 = 42
# Expected output: '42 is even'
num3 = 221
# Expected output: '221 is odd'

#PsudoCode:
    #1. create a method (remove)
    #2. take each number (num)
    #3. determins odd or even (.odd?)
    #4. outputs result

def odd_or_even (num)
    if num.odd? 
        p " #{num} is an odd number"
    else 
        p "#{num} is an even number"
    end
end

odd_or_even(num1)
odd_or_even(num2)
odd_or_even(num3)


# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. 
# HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

beatles_album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
beatles_album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
beatles_album3 = 'Abbey Road'
# Expected output: 'bby Rd'


#PsudoCode:
    #1. create a method (remove)
    #2. take each string (str)
    #3. delete (.delete) vowels ("aeiou")
    #4. outputs result

def remove (str)
    str.delete "aeiou"
end

p remove(beatles_album1)
p remove(beatles_album2)
p remove(beatles_album3)


# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.

palindrome_tester1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
palindrome_tester2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
palindrome_tester3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'

#PsudoCode:
    #1. create a method (remove)
    #2. take each string (str)
    #3. reverses the string (.reverse)
    #4. compares to original string
         #5. if same, palindrome 
    #6. outputs result 

def is_it_palindrome (stri)
    if stri.downcase == stri.downcase.reverse 
        p " #{stri} is a palindrome"
    else 
        p " #{stri} is not a palindrome"
    end
end

is_it_palindrome(palindrome_tester1)
is_it_palindrome(palindrome_tester2)
is_it_palindrome(palindrome_tester3)

#This one almost had me stuck! I kept getting 1 & 3 were NOT palindromes...and couldn't figure out why my code was broken. Thenk I realized I needed to correct for casing! Tricky! 
