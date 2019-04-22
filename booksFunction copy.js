const bookInfo = (Title, Author, Year, Genre) => {
    return {
        Title: Title,
        Author: Author,
        Year: Year, 
        Genre: Genre,
    }
}

const Mockingbird = bookInfo("To Kill A Mockinbird", "Harper Lee", 1960, "Fiction, Southern Gothic, Classic")

const Gatsby = bookInfo("The Great Gatsby", "F. Scott Fitzgerald", 1925, "Fiction, Classic")

const Miserables = bookInfo("Les Miserables", "Victor Hugo", 1862, "Fiction, Historical Fiction, Classic")

const Sun = bookInfo("The Sun Also Rises", "Ernest Hemingway", 1926, "Fiction, Classic")

const Brothers = bookInfo("The Brothers Karamazov", "Fyodor Dostoevksy", 1880, "Fiction, Suspense, Philosophical Fiction")

const Brave = bookInfo("Brave New World", "Aldous Huxley", 1932, "Science Fiction, Dystopian")

const Guide = bookInfo("The Hitchhiker's Guide To The Galaxy", "Douglas Adams", 1979, "Science Fiction, Comedy")

const Ender = bookInfo("Ender's Game", "Orson Scott Card", 1985, "Science Fiction")

const Journey = bookInfo("Journey To The Center Of The Earth", "Jules Verne", 1864, "Science Fiction, Adventure")

const Fahrenheit = bookInfo("Fahrenheit 451", "Ray Bradbury", 1953, "Science Fiction, Dystopian")

const Fault = bookInfo("The Fault In Our Stars", "John Greene", 2012, "Young Adult Fiction")

const Hunger = bookInfo("The Hunger Games", "Suzanne Collins", 2008, "Young Adult Fiction, Dystopian, Action")

const Holes = bookInfo("Holes", "Louis Sachar", 1998, "Young Adult, Adventure")

const Notebook = bookInfo("The Notebook", "Nicholas Sparks", 1996, "Young Adult, Romance")

const Maze = bookInfo("The Maze Runner", "James Dashner", 2009, "Young Adult, Science Fiction, Dystopian")