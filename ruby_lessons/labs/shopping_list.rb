require 'pry'

#shopping_list is a local variable
#@shopping_list is an instance variable, making it
#available to all methods
@shopping_list = ['peanuts', 'pretzels', 'coffe',
'pretezel sticks', 'fruit snacks', 'pretzel nuggets']


#Add Item to the end of @shopping_list array
# def add_item
#   puts "What would you like to add to your list?"
#   item = gets.chomp
#   @shopping_list << item
#   puts "#{item} has been added to your list"
#   puts @shopping_list
#   binding.pry
# end
#
# #Call Method add_item
# add_item
#
# def remove_item
#   puts "What Would you like to remove from your list?"
#   puts @shopping_list
#   item = gets.chomp
#   #pass item as an argument
#   @shopping_list.delete(item)
#   puts "#{item} was removed from your list"
#   puts @shopping_list
# end
#
# remove_item

# def replace_item
#   item = @shopping_list.detect {|n| n == 'pretzels'}
#   puts "Would you like to replace #{item}, with Ice Cream?"
#   response = gets.chomp
#   if response == 'yes'
#     @shopping_list.delete_at(1)
#     @shopping_list.insert(1, 'Ice Cream')
#     puts @shopping_list
#   else puts @shopping_list
#   end
# end
#
# replace_item

def reverse_list
  @shopping_list.reverse.each{|x| puts x, ""}
  # puts @shopping_list
end

reverse_list
