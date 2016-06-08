# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Author.create(first_name: "Leo", last_name: "Tolstoy")
Author.create(first_name: "Charles", last_name: "Dickens")

Book.create(title: "War and Peace", author_id: 1, isbn: "0140447938", description: "Tolstoy's epic masterpiece intertwines the lives of private and public individuals during the time of the Napoleonic wars and the French invasion of Russia. The fortunes of the Rostovs and the Bolkonskys, of Pierre, Natasha, and Andrei, are intimately connected with the national history that is played out in parallel with their lives. Balls and soirees alternate with councils of war and the machinations of statesmen and generals, scenes of violent battles with everyday human passions in a work whose extraordinary imaginative power has never been surpassed. \n\nThe prodigious cast of characters, seem to act and move as if connected by threads of destiny as the novel relentlessly questions ideas of free will, fate, and providence. Yet Tolstoy's portrayal of marital relations and scenes of domesticity is as truthful and poignant as the grand themes that underlie them.")
b1 = Book.find_by(title: "War and Peace")
Book.create(title: "Anna Karenina", author_id: 1, isbn: "0143035002", description: "Leo Tolstoy’s classic story of doomed love is one of the most admired novels in world literature. Generations of readers have been enthralled by his magnificent heroine, the unhappily married Anna Karenina, and her tragic affair with dashing Count Vronsky.\n\nIn their world frivolous liaisons are commonplace, but Anna and Vronsky’s consuming passion makes them a target for scorn and leads to Anna’s increasing isolation. The heartbreaking trajectory of their relationship contrasts sharply with the colorful swirl of friends and family members who surround them, especially the newlyweds Kitty and Levin, who forge a touching bond as they struggle to make a life together. Anna Karenina is a masterpiece not only because of the unforgettable woman at its core and the stark drama of her fate, but also because it explores and illuminates the deepest questions about how to live a fulfilled life.")
b2 = Book.find_by(title: "Anna Karenina")
Book.create(title: "A Tale of Two Cities", author_id: 2, isbn: "0486406512", description: "After eighteen years as a political prisoner in the Bastille, the ageing Doctor Manette is finally released and reunited with his daughter in England. There the lives of two very different men, Charles Darnay, an exiled French aristocrat, and Sydney Carton, a disreputable but brilliant English lawyer, become enmeshed through their love for Lucie Manette. From the tranquil roads of London, they are drawn against their will to the vengeful, bloodstained streets of Paris at the height of the Reign of Terror, and they soon fall under the lethal shadow of La Guillotine.")
b3 = Book.find_by(title: "A Tale of Two Cities")

User.create(username: "Guest", email: "Guest", password: "password")
u = User.find_by(email: "Guest")

Reading.create(user_id: u.id, book_id: b1.id, review: "It was amazing.", status: "have-read")
r1 = Reading.find_by(book_id: b1.id)
Reading.create(user_id: u.id, book_id: b2.id, status: "will-read")
r2 = Reading.find_by(book_id: b2.id)


Shelf.create(user_id: u.id, name: "A sample shelf")
s = Shelf.find_by(name: "A sample shelf")

ShelfAssignment.create(reading_id: r1.id, shelf_id: s.id)
ShelfAssignment.create(reading_id: r2.id, shelf_id: s.id)




# 
#
# ShelfAssignment(id: integer, reading_id: integer, shelf_id: integer, created_at: datetime, updated_at: datetime)
# Reading(id: integer, user_id: integer, book_id: integer, review: text, status: string, created_at: datetime, updated_at: datetime)
#  Shelf(id: integer, user_id: integer, created_at: datetime, updated_at: datetime, name: string)
