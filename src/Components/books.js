import React, {Component} from 'react';
import propTypes from 'prop-types';
import '../css/books.css';

class Books extends Component{
    constructor(){
        super();
    }
    render(){
        return (
            <div className="card text-white bg-secondary mb-3">
            <div className="card-body">
            <img className="Book-cover" src="https://images-na.ssl-images-amazon.com/images/I/51tTOOrLPFL._SX329_BO1,204,203,200_.jpg"></img>
            </div>
          </div>
        );
    }
}
Books.defaultProps= {
    title: "A Cool Title",
    body: "A Cool Body",
};
Books.propTypes= {
    title: propTypes.string
};
export default Books;