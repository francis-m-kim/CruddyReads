



a1 = Author.create(first_name: "Leo", last_name: "Tolstoy")
Book.create(title: "Anna Karenina", author_id: a1.id, isbn: "0143035002", description: "Leo Tolstoy’s classic story of doomed love is one of the most admired novels in world literature. Generations of readers have been enthralled by his magnificent heroine, the unhappily married Anna Karenina, and her tragic affair with dashing Count Vronsky.\n\nIn their world frivolous liaisons are commonplace, but Anna and Vronsky’s consuming passion makes them a target for scorn and leads to Anna’s increasing isolation. The heartbreaking trajectory of their relationship contrasts sharply with the colorful swirl of friends and family members who surround them, especially the newlyweds Kitty and Levin, who forge a touching bond as they struggle to make a life together. Anna Karenina is a masterpiece not only because of the unforgettable woman at its core and the stark drama of her fate, but also because it explores and illuminates the deepest questions about how to live a fulfilled life.")
b2 = Book.find_by(title: "Anna Karenina")
b2.image = "http://s3.amazonaws.com/cruddyreads-dev/books/images/000/000/002/original/anna_karenina.png?1465399989"
b2.save

a2 = Author.create(first_name: "Charles", last_name: "Dickens")
Book.create(title: "A Tale of Two Cities", author_id: a2.id, isbn: "0486406512", description: "After eighteen years as a political prisoner in the Bastille, the ageing Doctor Manette is finally released and reunited with his daughter in England. There the lives of two very different men, Charles Darnay, an exiled French aristocrat, and Sydney Carton, a disreputable but brilliant English lawyer, become enmeshed through their love for Lucie Manette. From the tranquil roads of London, they are drawn against their will to the vengeful, bloodstained streets of Paris at the height of the Reign of Terror, and they soon fall under the lethal shadow of La Guillotine.")
b3 = Book.find_by(title: "A Tale of Two Cities")
b3.image = "http://s3.amazonaws.com/cruddyreads-dev/books/images/000/000/003/original/tale_of_two_cities.jpeg?1465400074"
b3.save

a3 = Author.create(first_name: "Leszek", last_name: "Kołakowski" )
b4 = Book.create(title: "Metaphysical Horror", author_id: a3.id, description: %Q[For over a century, philosophers have argued that philosophy is impossible or useless, or both. Although the basic notion dates back to the days of Socrates, there is still heated disagreement about the nature of truth, reality, knowledge, the good, and God. This may make little practical difference to our lives, but it leaves us with a feeling of radical uncertainty, a feeling described by Kolakowski as "metaphysical horror." "The horror is this," he says, "if nothing truly exists except the Absolute, the Absolute is nothing; if nothing truly exists except myself, I am nothing." The aim of this book, for Kolakowski, is finding a way out of this seeming dead end.

In a trenchant analysis that serves as an introduction to nearly all of Western philosophy, Kolakowski confronts these dilemmas head on through examinations of several prominent philosophers including Descartes, Spinoza, Husserl, and many of the Neo-Platonists. He finds that philosophy may not provide definitive answers to the fundamental questions, yet the quest itself transforms our lives. It may undermine most of our certainties, yet it still leaves room for our spiritual yearnings and religious beliefs.

The final sentence of the book captures the hopefulness that has survived the horror of nothingness when Kolakowski asks: "Is it not reasonable to suspect that if existence were pointless and the universe devoid of meaning, we would never have achieved not only the ability to imagine otherwise, but even the ability to entertain this very thought—to wit, that existence is pointless and the universe devoid of meaning?" The answer, of course, is clear. Now it is up to readers to take up the challenge of his arguments.])
file = File.open("app/assets/images/mhorror.jpeg")
b4.image = file
b4.save


a4 = Author.create(first_name: "Evelyn", last_name: "Waugh" )
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

a7 = Author.create(first_name: "Louis", last_name: "de Bernières" )
b7 = Book.create(title: "Captain Corelli's Mandolin", author_id: a7.id, description: %Q[Captain Corelli’s Mandolin is set in the early days of the second world war, before Benito Mussolini invaded Greece. Dr Iannis practices medicine on the island of Cephalonia, accompanied by his daughter, Pelagia, to whom he imparts much of his healing art. Even when the Italians do invade, life isn’t so bad—at first anyway. The officer in command of the Italian garrison is the cultured Captain Antonio Corelli, who responds to a Nazi greeting of “Heil Hitler” with his own “Heil Puccini”, and whose most precious possession is his mandolin. It isn't long before Corelli and Pelagia are involved in a heated affair--despite her engagement to a young fisherman, Mandras, who has gone off to join Greek partisans. Love is complicated enough in wartime, even when the lovers are on the same side. And for Corelli and Pelagia, it becomes increasingly difficult to negotiate the minefield of allegiances, both personal and political, as all around them atrocities mount, former friends become enemies and the ugliness of war infects everyone it touches.

British author Louis de Bernières is well known for his forays into magical realism in such novels as The War of Don Emmanuel's Nether Parts, Señor Vivo and the Coca Lord and The Troublesome Offspring of Cardinal Guzman. Here he keeps it to a minimum, though certainly the secondary characters with whom he populates his island—the drunken priest, the strongman, the fisherman who swims with dolphins—would be at home in any of his wildly imaginative Latin American fictions. Instead, de Bernières seems interested in dissecting the nature of history as he tells his ever-darkening tale from many different perspectives. Captain Corelli’s Mandolin works on many levels, as a love story, a war story and a deconstruction of just what determines the facts that make it into the history books.])
file = File.open("app/assets/images/corelli.jpeg")
b7.image = file
b7.save



u = User.create(username: "Guest", email: "guestaccount@crud.com", password: "password")


r1 = Reading.create(user_id: u.id, book_id: b2.id, review: "Insufferably, intolerably, incommunicably long.", status: "Have Read")
r2 = Reading.create(user_id: u.id, book_id: b3.id, status: "Will Read")



Shelf.create(user_id: u.id, name: "Interminable fiction")
s1 = Shelf.find_by(name: "Interminable fiction")

ShelfAssignment.create(reading_id: r1.id, shelf_id: s1.id)
ShelfAssignment.create(reading_id: r2.id, shelf_id: s1.id)


("aaa".."ape").each do |name|
  User.create(username: name, email: name + "@crud.com", password: "password")
end
