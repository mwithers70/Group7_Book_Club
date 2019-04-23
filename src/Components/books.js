import React, { Component } from 'react';
import '../css/books.css';
import data from './data';


class books extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <div className="div-books">
                <div className="row" >
                <Book title = "Book Author" body="Name of Author" />
                <Book title= "Book Title" body="Title of Book" />
                <Book title="Book Year" body="Publication Year" />
                <Book title = "Book Author" body="Name of Author"/>
                <Book title = "Book Genre" body="Genre of Book"/>

                </div>
                </div>
                <div>
                    {/* <button className = "btn btn-success add-button">Add</button> */}
                </div>
            </div>
        )
    }
}
export default data;