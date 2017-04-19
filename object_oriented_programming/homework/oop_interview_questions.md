# Homework
---

### Object-Oriented Interview Questions

- Give three different examples of inheritance. Write these class definitions
and their inheritance relationships out in Ruby.

```ruby
require 'pry'

class Person

  def initialize(name:, age:, city:)
    @name = name
    @age = age
    @city = city
  end

  def to_s
    puts "Hi my name is #{@name}, and I am #{@age} years old. My hometown is #{@city}."
  end
end


class QuietBrother < Person

  def to_s
    puts "Hey...I'm #{@name}....#{@age} years old....and I'm from #{@city}."
  end
end


class Cousin < Person
  def to_s
    puts "UHHH SUHHHHH DUUUUUDE, I'm #{@name}, #{@age} and I come from ##{@city}"
  end
end





person = Person.new(name: "Dan", age: 26, city: "Atlanta")
brother = QuietBrother.new(name: "Bryan", age: 21, city: "Houston")
cousin = Cousin.new(name: "Justin", age: 19, city: "Macon")


puts person.to_s
puts brother.to_s
puts cousin.to_s
```


- What is the difference (in your own words) between a local variable, an
instance variable, and class variable.

  local variable - A local variable is a variable that lives within the scope of where it is defined and is not able to be used beyond that.

  class variable - A class variable is a variable that lives wherever the class has been instanced and will remain defined as long as the class instance is defined.

  instance variable - An instance variable is a variable created within a class instance that lives through identical instances of a class

- What is encapsulation?

    Encapsulation - the hiding of data behind private methods that can only be read by methods of its own class.


- What is a `private` method?

      Private Methods - Methods that can only be called within their defining class.

- What is the difference between a class and an object? What is the difference
between a class and an instance?

    Objects are data structures made up of key value pairs, while classes are essentially blueprints for object-oriented data, meant to exist in multiple places at once as instances.


- What is "duck typing" in Ruby?

      Allowing methods to be defined without a datatype

- Describe "Polymorphism"

      code that can be used with various datatypes


- What is a "base class", "sub-class", and "super class"?

  base class - your typical class
  sub-class - a class that inherits from a super-class
  super-class - a class used as the basis of inheritance
