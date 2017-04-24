# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Article.delete_all
Comment.delete_all

user_comment = Comment.create(username: "User 1")

Article.create(content: "Article 1: How to...", comment_id: user_comment.id )
Article.create(content: "Article 2: How to...", comment_id: user_comment.id)
