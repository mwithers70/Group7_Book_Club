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
    handleEdit() {
        this.setState({
            editMode: true
        });
    }
    handleSave() {
        this.setState({
            title: this.refs.titleContent.value,
            author: this.refs.authorContent.value,
            year: this.refs.yearContent.value,
            genre: this.refs.genreContent.value,
            editMode: false
        });
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
        let titleElement, authorElement, yearElement, genreElement, buttonArea;
        if (this.state.editMode) {
            titleElement = (
                <textarea
                    ref="titleContent"
                    className="title-textarea"
                    defaultValue={this.state.title}
                />
            );
            authorElement = (
                <textarea
                    ref="authorContent"
                    className="author-textarea"
                    defaultValue={this.state.author}
                />
            );
            yearElement = (
                <textarea
                    ref='yearContent'
                    className="title-textarea"
                    defaultValue={this.state.year}
                />
            );
            genreElement = (
                <textarea
                    ref="genreContent"
                    className="genre-textarea"
                    defaultValue={this.state.genre}
                />
            )
            buttonArea = (
                <div>
                    <button className="btn btn-info" onClick={this.handleSave.bind(this)}>
                        Save
              </button>
                </div>
            );
        } else {
            titleElement = <h5>{this.state.title}</h5>;
            authorElement = <p>{this.state.author}</p>
            yearElement = <p>{this.state.year}</p>
            genreElement = <p>{this.state.genre}</p>
                ;
            buttonArea = (
                <div>
                    <button
                        className="btn btn-warning"
                        onClick={this.handleEdit.bind(this.state)}
                    >
                        Edit
          </button>
                    <button
                        className="btn btn-danger"
                        onClick={this.handleDelete.bind(this)}
                    >
                        Delete
          </button>
                </div>
            );
        }
        return (
            <div className="col-sm-6">
                <div className="card card-view">
                    <div className="card-body">
                        {titleElement}
                        {authorElement}
                        {yearElement}
                        {genreElement}
                        {buttonArea}
                    </div>
                </div>
            </div>
        );
    }

    render() {
        return (
            <div class="container">

                <div class='card-logo '>
                    <img src={require(`../G7BC.png`)} heightt="400px" width="400px" className="logo" alt=""></img>
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
