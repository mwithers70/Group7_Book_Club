import React, { Component } from 'react';
import '../CSS/books.css';

class Book extends Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            read: false,

        }
    }


    render() {
        return (
            <div className="col-sm-4">
            <input type="checkbox" id={this.props.title} />
              <label for={this.props.title}><img src={require(`../../${this.props.image}`)} alt="Avatar" className="image"></img>
            <div className="middle">
                <div className="text">
                    <p>Title: {this.props.title}</p>
                    <p>Author: {this.props.author}</p>
                    <p>Year: {this.props.year}</p>
                    <p>Genre: {this.props.genre}</p>
                    <button className='btn btn-warning' onClick={this.handleClick.bind(this)}>Edit Book Info</button>
                    <button className='btn btn-danger'  onClick={this.handleClick.bind(this)}>Delete Book</button>
                </div>
            </div>
            </label>
               </div> 
        )
    }
    read() {
        this.setState({
            read: true
            
        });
    }
    handleClick() {
        this.read();
    }
    
}
export default Book;

