import React, { Component } from 'react';
import '../CSS/BookShelf.css';
import Book from './books'

class BookShelf extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Classicbooks: [Mockingbird, Gatsby, Miserables, Sun, Brothers],
            ScienceFictionBooks: [Brave, Ender, Fahrenheit, Journey, Guide],
            YoungAdultBooks: [Holes, Fault, Hunger, Maze, Notebook],
        }
    }

    render() {

        return (
            <div class="container">
<nav class="navbar fixed-top text-light bg-dark" >
  <a class="navbar-brand -light">
    <img src="https://www.glbthotline.org/uploads/5/1/3/0/51304353/booklistnew_1_orig.png" width="40" height="30" class="d-inline-block align-top" alt=""></img>
    Books-A-Mania
  </a>
</nav>
             <div class="row flex-row flex-nowrap">
                {this.state.Classicbooks.map(book => (
                    <Book
                        title={book.title}
                        author={book.author}
                        year={book.year}
                        genre={book.genre}
                        image={book.image} />
                )
                )}
            </div>
            <div class="card text-white bg-dark mb-3">
  <div class="card-header"><h3 class="title">Classic</h3></div>
</div>
            <div class="row flex-row flex-nowrap">
                {this.state.ScienceFictionBooks.map(book => (
                    <Book
                        title={book.title}
                        author={book.author}
                        year={book.year}
                        genre={book.genre}
                        image={book.image} />
                ))
                }
            </div>
            <div class="card text-white bg-dark mb-3">
  <div class="card-header"><h3 class="title">Science Fiction</h3></div>
</div>
            <div class="row flex-row flex-nowrap">
                {this.state.YoungAdultBooks.map(book => (
                    <Book
                        title={book.title}
                        author={book.author}
                        year={book.year}
                        genre={book.genre}
                        image={book.image} />
                ))
                }

            </div>
            <div class="card text-white bg-dark mb-3">
  <div class="card-header"><h3 class="title">Young Adults</h3></div>
</div>
            </div>
            
            

        );

    }
}
export default BookShelf;

const bookInfo = (Title, Author, Year, Genre, imgURL) => {
    return {
        title: Title,
        author: Author,
        year: Year,
        genre: Genre,
        image: imgURL,
    }
}

const Mockingbird = bookInfo("To Kill A Mockingbird", "Harper Lee", 1960, "Fiction, Southern Gothic, Classic", "Book-Images/Classics/To-Kill-a-Mockingbird.jpg")

const Gatsby = bookInfo("The Great Gatsby", "F. Scott Fitzgerald", 1925, "Fiction, Classic",
    "Book-Images/Classics/The-Great-Gatsby.jpg")

const Miserables = bookInfo("Les Miserables", "Victor Hugo", 1862, "Fiction, Historical Fiction, Classic",
    "Book-Images/Classics/Les-Miserables.jpg")

const Sun = bookInfo("The Sun Also Rises", "Ernest Hemingway", 1926, "Fiction, Classic", "Book-Images/Classics/The-Sun-Also-Rises.jpg")

const Brothers = bookInfo("The Brothers Karamazov", "Fyodor Dostoevksy", 1880, "Fiction, Suspense, Philosophical Fiction", "Book-Images/Classics/The-Brothers_Karamazov.jpg")

const Brave = bookInfo("Brave New World", "Aldous Huxley", 1932, "Science Fiction, Dystopian", "Book-Images/Science-Fiction/Brave-New-World.jpg")

const Guide = bookInfo("The Hitchhiker's Guide To The Galaxy", "Douglas Adams", 1979, "Science Fiction, Comedy", "Book-Images/Science-Fiction/The-Hitchhikers-Guide-To-The-Galaxy.jpg")

const Ender = bookInfo("Ender's Game", "Orson Scott Card", 1985, "Science Fiction", "Book-Images/Science-Fiction/Enders-Game.jpg")

const Journey = bookInfo("Journey To The Center Of The Earth", "Jules Verne", 1864, "Science Fiction, Adventure", "Book-Images/Science-Fiction/Journey-To-The-Center-Of-The-Earth.jpg")

const Fahrenheit = bookInfo("Fahrenheit 451", "Ray Bradbury", 1953, "Science Fiction, Dystopian", "Book-Images/Science-Fiction/Fahrenheit-451.jpg")

const Fault = bookInfo("The Fault In Our Stars", "John Greene", 2012, "Young Adult Fiction", "Book-Images/Young-Adult/The-Fault-In-Our-Stars.jpg")

const Hunger = bookInfo("The Hunger Games", "Suzanne Collins", 2008, "Young Adult Fiction, Dystopian, Action", "Book-Images/Young-Adult/The-Hunger-Games.jpg")

const Holes = bookInfo("Holes", "Louis Sachar", 1998, "Young Adult, Adventure", "Book-Images/Young-Adult/Holes.jpg")

const Notebook = bookInfo("The Notebook", "Nicholas Sparks", 1996, "Young Adult, Romance", "Book-Images/Young-Adult/The-Notebook.jpg")

const Maze = bookInfo("The Maze Runner", "James Dashner", 2009, "Young Adult, Science Fiction, Dystopian", "Book-Images/Young-Adult/The-Maze-Runner.jpg")