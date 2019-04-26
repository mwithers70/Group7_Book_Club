import React, { Component } from 'react';
import '../CSS/BookShelf.css';
import books from '../assets/books.json'
import Book from './books';
import NewBooks from './NewBooks';


class BookShelf extends Component {
    constructor(props) {
        super(props);
   
        this.state = {
            Classicbooks: books.Classicbooks,
            ScienceFictionBooks: books.ScienceFictionBooks,
            YoungAdultBooks: books.YoungAdultBooks,
            books: [],
            
        }
    }
    
    deleteBook(id) {
        for (let key in this.state) {
            let books = this.state[key];
            books = books.filter(book => book.id !== id);
            this.setState({ [key]: books });
        }
    }
    addBooks() {
        this.state.books.push({
            id: Date.now()
        });
        this.setState({
            books: this.state.books
        });
    }
    
    render() {
        return (
            <div class="container">

                <div class='card-logo '>
                    <img src="https://files.slack.com/files-pri/TH2CJVD6H-FHZA8234H/g7bc.png" heightt="400px" width="400px" className="logo" alt=""></img>
                </div>

                <div class="row flex-row flex-nowrap" id="style-7">
                    {this.state.Classicbooks.map(book => (
                        <Book
                            title={book.title}
                            author={book.author}
                            year={book.year}
                            genre={book.genre}
                            image={book.image}
                            summary={book.summary}
                            id={book.id}
                            key={book.id}
                            deleteHandler={this.deleteBook.bind(this, book.id)}
                        />
                    )
                    )}
                </div>

                <div class="card-header"><h2 class="title">CLASSIC</h2></div>
                <br></br>
                <br></br>
                <div class="row flex-row flex-nowrap" id="style-7">
                    {this.state.ScienceFictionBooks.map(book => (
                        <Book
                            title={book.title}
                            author={book.author}
                            year={book.year}
                            genre={book.genre}
                            image={book.image}
                            summary={book.summary}
                            id={book.id}
                            key={book.id}
                            deleteHandler={this.deleteBook.bind(this, book.id)}

                        />
                    ))
                    }
                </div>

                <div class="card-header"><h2 class="title">SCIENCE FICTION</h2></div>
                <br></br>
                <br></br>
                <div class="row flex-row flex-nowrap" id="style-7">
                    {this.state.YoungAdultBooks.map(book => (
                        <Book
                            title={book.title}
                            author={book.author}
                            year={book.year}
                            genre={book.genre}
                            image={book.image}
                            summary={book.summary}
                            id={book.id}
                            key={book.id}
                            deleteHandler={this.deleteBook.bind(this, book.id)}
                        />
                    ))
                    }

                </div>
                <div class="card-header"><h2 class="title">YOUNG ADULT</h2></div>
                <br></br>
                <br></br>

                <div class="row flex-row flex-nowrap" id="style-7">
                    <div class="col">
                    </div>
                    <div className="col-3">
                        <p className="words">Want to add a new book ?</p>
                        <div className="middle">
                            <button className='btn btn-success' onClick={this.addBooks.bind(this)}>Add A New Book</button>
                        </div>
                    </div>
                    <div class="col">
                    </div>
                    {this.state.books.map(book => {
                        return (
                            <NewBooks
                                title={book.title}
                                author={book.author}
                                year={book.year}
                                genre={book.genre}
                                image={book.image}
                                key={book.id}
                                id={book.id}
                                deleteHandler={this.deleteBook.bind(this, book.id)}
                            />
                        );
                    })}
                </div>
                <div class="card-header"><h2 class="title">MY PERSONAL BOOKS</h2></div>
                <br></br>
                <br></br>
            </div>

        );

    }
}

export default BookShelf;
