const bookInfo = (Title, Author, Year, Genre) => {
    return {
        Title: Title,
        Author: Author,
        Year: Year, 
        Genre: Genre,
        Image: imgURL,
    }
}

const Mockingbird = bookInfo("To Kill A Mockingbird", "Harper Lee", 1960, "Fiction, Southern Gothic, Classic", "Book-Images copy/Classics/To-Kill-a-Mockingbird.jpg")

const Gatsby = bookInfo("The Great Gatsby", "F. Scott Fitzgerald", 1925, "Fiction, Classic",
"Book-Images copy/Classics/The-Great-Gatsby.jpg")

const Miserables = bookInfo("Les Miserables", "Victor Hugo", 1862, "Fiction, Historical Fiction, Classic",
"Book-Images copy/Classics/Les-Miserables.jpg")

const Sun = bookInfo("The Sun Also Rises", "Ernest Hemingway", 1926, "Fiction, Classic", "Book-Images copy/Classics/The-Sun-Also-Rises.jpg")

const Brothers = bookInfo("The Brothers Karamazov", "Fyodor Dostoevksy", 1880, "Fiction, Suspense, Philosophical Fiction", "Book-Images copy/Classics/The-Brothers-Karamazov.jpg")

const Brave = bookInfo("Brave New World", "Aldous Huxley", 1932, "Science Fiction, Dystopian", "Book-Images copy/Science-Fiction/Brave-New-World.jpg")

const Guide = bookInfo("The Hitchhiker's Guide To The Galaxy", "Douglas Adams", 1979, "Science Fiction, Comedy", "Book-Images copy/Science-Fiction/The-Hitchikers-Guide-To-The-Galaxy.jpg")

const Ender = bookInfo("Ender's Game", "Orson Scott Card", 1985, "Science Fiction", "Book-Images copy/Science-Fiction/Enders-Game.jpg")

const Journey = bookInfo("Journey To The Center Of The Earth", "Jules Verne", 1864, "Science Fiction, Adventure", "Book-Images copy/Science-Fiction/Journey-To-The-Center-Of-The-Earth.jpg")

const Fahrenheit = bookInfo("Fahrenheit 451", "Ray Bradbury", 1953, "Science Fiction, Dystopian", "Book-Images copy/Science-Fiction/Fahrenheit-451.jpg")

const Fault = bookInfo("The Fault In Our Stars", "John Greene", 2012, "Young Adult Fiction", "Book-Images copy/Young-Adult/The-Fault-In-Our-Stars.jpg")

const Hunger = bookInfo("The Hunger Games", "Suzanne Collins", 2008, "Young Adult Fiction, Dystopian, Action", "Book-Images copy/Young-Adult/The-Hunger-Games.jpg")

const Holes = bookInfo("Holes", "Louis Sachar", 1998, "Young Adult, Adventure", "Book-Images copy/Young-Adult/Holes.jpg")

const Notebook = bookInfo("The Notebook", "Nicholas Sparks", 1996, "Young Adult, Romance", "Book-Images copy/Young-Adult/The-Notebook.jpg")

const Maze = bookInfo("The Maze Runner", "James Dashner", 2009, "Young Adult, Science Fiction, Dystopian", "Book-Images copy/Young-Adult/The-Maze-Runner.jpg")