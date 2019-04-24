import React from 'react';
import Book from './Book';

class Shelf extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [],
            full: (this.books.length > 4),
        }
    }

    render() {
        return ( this.state.books.map( book => {
            return <Book />
        }))
    }
}
