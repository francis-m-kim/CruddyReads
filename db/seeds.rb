# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)



Book.create(title: "War and Peace", author_id: 1, isbn: "0140447938")
Book.create(title: "Anna Karenina", author_id: 1, isbn: "0143035002")

Book.create(title: "A Tale of Two Cities", author_id: 2, isbn: "0486406512")
