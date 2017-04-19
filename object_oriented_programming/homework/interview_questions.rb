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
