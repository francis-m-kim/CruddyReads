
# Author.create(first_name: , last_name: )
a1 = Author.create(first_name: "Leo", last_name: "Tolstoy")
a2 = Author.create(first_name: "Charles", last_name: "Dickens")
a3 = Author.create(first_name: "Leszek", last_name: "Kołakowski" )
a4 = Author.create(first_name: "Evelyn", last_name: "Waugh" )



Book.create(title: "War and Peace", author_id: a1.id, isbn: "0140447938", description: "Tolstoy's epic masterpiece intertwines the lives of private and public individuals during the time of the Napoleonic wars and the French invasion of Russia. The fortunes of the Rostovs and the Bolkonskys, of Pierre, Natasha, and Andrei, are intimately connected with the national history that is played out in parallel with their lives. Balls and soirees alternate with councils of war and the machinations of statesmen and generals, scenes of violent battles with everyday human passions in a work whose extraordinary imaginative power has never been surpassed. \n\nThe prodigious cast of characters, seem to act and move as if connected by threads of destiny as the novel relentlessly questions ideas of free will, fate, and providence. Yet Tolstoy's portrayal of marital relations and scenes of domesticity is as truthful and poignant as the grand themes that underlie them.")
b1 = Book.find_by(title: "War and Peace")
b1.image = "http://s3.amazonaws.com/cruddyreads-dev/books/images/000/000/001/original/war_and_peace.jpeg?1465400127"
b1.save

Book.create(title: "Anna Karenina", author_id: a2.id, isbn: "0143035002", description: "Leo Tolstoy’s classic story of doomed love is one of the most admired novels in world literature. Generations of readers have been enthralled by his magnificent heroine, the unhappily married Anna Karenina, and her tragic affair with dashing Count Vronsky.\n\nIn their world frivolous liaisons are commonplace, but Anna and Vronsky’s consuming passion makes them a target for scorn and leads to Anna’s increasing isolation. The heartbreaking trajectory of their relationship contrasts sharply with the colorful swirl of friends and family members who surround them, especially the newlyweds Kitty and Levin, who forge a touching bond as they struggle to make a life together. Anna Karenina is a masterpiece not only because of the unforgettable woman at its core and the stark drama of her fate, but also because it explores and illuminates the deepest questions about how to live a fulfilled life.")
b2 = Book.find_by(title: "Anna Karenina")
b2.image = "http://s3.amazonaws.com/cruddyreads-dev/books/images/000/000/002/original/anna_karenina.png?1465399989"
b2.save

Book.create(title: "A Tale of Two Cities", author_id: a3.id, isbn: "0486406512", description: "After eighteen years as a political prisoner in the Bastille, the ageing Doctor Manette is finally released and reunited with his daughter in England. There the lives of two very different men, Charles Darnay, an exiled French aristocrat, and Sydney Carton, a disreputable but brilliant English lawyer, become enmeshed through their love for Lucie Manette. From the tranquil roads of London, they are drawn against their will to the vengeful, bloodstained streets of Paris at the height of the Reign of Terror, and they soon fall under the lethal shadow of La Guillotine.")
b3 = Book.find_by(title: "A Tale of Two Cities")
b3.image = "http://s3.amazonaws.com/cruddyreads-dev/books/images/000/000/003/original/tale_of_two_cities.jpeg?1465400074"
b3.save

b4 = Book.create(title: "Metaphysical Horror", author_id: a3.id, description: %Q[For over a century, philosophers have argued that philosophy is impossible or useless, or both. Although the basic notion dates back to the days of Socrates, there is still heated disagreement about the nature of truth, reality, knowledge, the good, and God. This may make little practical difference to our lives, but it leaves us with a feeling of radical uncertainty, a feeling described by Kolakowski as "metaphysical horror." "The horror is this," he says, "if nothing truly exists except the Absolute, the Absolute is nothing; if nothing truly exists except myself, I am nothing." The aim of this book, for Kolakowski, is finding a way out of this seeming dead end.

In a trenchant analysis that serves as an introduction to nearly all of Western philosophy, Kolakowski confronts these dilemmas head on through examinations of several prominent philosophers including Descartes, Spinoza, Husserl, and many of the Neo-Platonists. He finds that philosophy may not provide definitive answers to the fundamental questions, yet the quest itself transforms our lives. It may undermine most of our certainties, yet it still leaves room for our spiritual yearnings and religious beliefs.

The final sentence of the book captures the hopefulness that has survived the horror of nothingness when Kolakowski asks: "Is it not reasonable to suspect that if existence were pointless and the universe devoid of meaning, we would never have achieved not only the ability to imagine otherwise, but even the ability to entertain this very thought—to wit, that existence is pointless and the universe devoid of meaning?" The answer, of course, is clear. Now it is up to readers to take up the challenge of his arguments.])
file = File.open("app/assets/images/mhorror.jpeg")
b4.image = file
b4.save

b5 = Book.create(title: "Decline and Fall" , author_id: a4.id, description: %Q[Expelled from Oxford for indecent behaviour, Paul Pennyfeather is oddly unsurprised to find himself qualifying for the position of schoolmaster at Llanabba Castle. His colleagues are an assortment of misfits, including Prendy (plagued by doubts) and captain Grimes, who is always in the soup (or just plain drunk). Then Sports Day arrives, and with it the delectable Margot Beste-Chetwynde, floating on a scented breeze. As the farce unfolds and the young run riot, no one is safe, least of all Paul. Taking its title from Edward Gibbon's Decline and Fall of the Roman Empire, Evelyn Waugh's first, funniest novel immediately caught the ear of the public with his account of an ingénu abroad in the decadent confusion of 1920s high society.])
file = File.open("app/assets/images/decline.jpeg")
b5.image = file
b5.save


a5 = Author.create(first_name: "Zbigniew", last_name: "Herbert" )
b5 = Book.create(title: "The Collected Poems, 1956-1998" , author_id: a5.id, description: %Q[This outstanding new translation brings a uniformity of voice to Zbigniew Herbert's entire poetic output, from his first book of poems, String of Light, in 1956, to his final volume, previously unpublished in English, Epilogue Of the Storm. Collected Poems: 1956-1998, as Joseph Brodsky said of Herbert's SSelected Poems, is "bound for a much longer haul than any of us can anticipate." He continues, "For Zbigniew Herbert's poetry adds to the biography of civilization the sensibility of a man not defeated by the century that has been most thorough, most effective in dehumanization of the species. Herbert's irony, his austere reserve and his compassion, the lucidity of his lyricism, the intensity of his sentiment toward classical antiquity, are not just trappings of a modern poet, but the necessary armor—in his case well-tempered and shining indeed—for man not to be crushed by the onslaught of reality. By offering to his readers neither aesthetic nor ethical discount, this poet, in fact, saves them frorn that poverty which every form of human evil finds so congenial. As long as the species exists, this book will be timely."])
file = File.open("app/assets/images/zbigniew.jpeg")
b5.image = file
b5.save

a6 = Author.create(first_name: "Eugene", last_name: "Ionesco" )
b6 = Book.create(title: "The Bald Soprano", author_id: a6.id, description: %Q[The leading figure of absurdist theater and one of the great innovators of the modern stage, Eugène Ionesco (1909-94) did not write his first play, The Bald Soprano, until 1950. He went on to become an internationally renowned master of modern drama, famous for the comic proportions and bizarre effects that allow his work to be simultaneously hilarious, tragic, and profound. As Ionesco has said, “Theater is not literature... It is simply what cannot be expressed by any other means.”])
file = File.open("app/assets/images/ionesco.jpeg")
b6.image = file
b6.save


# b_ = Book.create(title: , author_id: , description: %Q[])
# file = File.open("app/assets/images/imagename.jpeg")
# b_.image = file
# b_.save

# ("aaa".."ape").each do |name|
#   User.create(username: name, email: name + "@crud.com", password: "password")
# end

u = User.create(username: "Guest", email: "guestaccount@crud.com", password: "password")


r1 = Reading.create(user_id: u.id, book_id: b1.id, review: "Insufferably, intolerably, incommunicably long.", status: "Have Read")
r2 = Reading.create(user_id: u.id, book_id: b2.id, status: "Will Read")



Shelf.create(user_id: u.id, name: "Interminable fiction")
s1 = Shelf.find_by(name: "Interminable fiction")

ShelfAssignment.create(reading_id: r1.id, shelf_id: s1.id)
ShelfAssignment.create(reading_id: r2.id, shelf_id: s1.id)




#
#
# ShelfAssignment(id: integer, reading_id: integer, shelf_id: integer, created_at: datetime, updated_at: datetime)
# Reading(id: integer, user_id: integer, book_id: integer, review: text, status: string, created_at: datetime, updated_at: datetime)
#  Shelf(id: integer, user_id: integer, created_at: datetime, updated_at: datetime, name: string)
