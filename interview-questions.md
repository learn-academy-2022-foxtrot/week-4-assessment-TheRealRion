# ASSESSMENT 4: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is object-oriented programming? How is it different than functional programming?

Your answer: Functional programming centers around creating and using functions for each part of a program. However, object oriented programming (OOP) centers around using objects to store data that can be reused and mutated through functions (or methods). 

Researched answer: HWile functional programming prioritizes effiency and nested functionss to assign every part of a code to a particular function (hardcoding), OOP uses objects to store data so that it can be later manipulated through methods/functions. 

2. What is the difference between a Float and an Integer in Ruby?

Your answer: An intiger is any whole number. A float is a number with one or more decimal places. 

Researched answer: An intiger (int) is any number that does not have a decimal point in it. A float (floating-point number) contains a decimal in the number. 

3. Ruby has an implicit return. What does that mean?

Your answer: Ruby's 'return' funciton is automatic and the 'return' function command is unneeded in creating functions. This is different than programming languages like JavaScript that require a return for every function to run properly. 

Researched answer: Each block (function) in Ruby will return the last line automatically (implicitly!), compared to programming languages such as JavaScript that require the literal word "return" to return a line of code. 

4. What is a block in Ruby?

Your answer: A block is a section of code in Ruby that can be reused (function). 

Researched answer: A block is Ruby's method that does not belong to an object. While other programming languages call them closures, blocks are used in Ruby. Some can contain names, but it is not needed. 

1. How do you extract a value in a Ruby hash?

Your answer: To return a value in Ruby from a Ruby Hash, you need to call it's value. For example, if the has is :

recipe {:flour => '2 1/4 cup' , :sugar => '1 cup' , :eggs => '3'} 

 and you wish to call up the value for flour, you would comply put: 

p recipe[:flour] 

which will return "2 1/4 cups"


Researched answer: To extract a value from a Ruby Hash, you use the hash name + key to return it's value. 

## Looking Ahead: Terms for Next Week

1. PostgreSQL: This is a database for SQL developers that woks as an open source database. 

2. Ruby on Rails: Rails is a full-stack framework that intigrates Ruby language to make it easier to code in Ruby for full-stack developers. 

3. ORM: Object Relational Mapping is a computer science technique that maps objects to it's relational database. 

4. Active Record: A Rails database tool used to persistently store data on a database. 

5. Migrations: A version control ststem for a database. 
