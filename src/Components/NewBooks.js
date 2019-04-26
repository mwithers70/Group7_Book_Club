import React, { Component } from 'react';
import '../CSS/books.css';
import {Link} from 'react-router-dom';
import PropTypes from "prop-types";

class NewBooks extends Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            read: false,
            editMode:false,
            title: this.props.title,
            author: this.props.author,
            year: this.props.year,
            genre: this.props.genre,
            
        }
        this.handleEdit=this.handleEdit.bind(this);
        this.handleSave=this.handleSave.bind(this);

    }
    handleEdit() {
        this.setState({
            editMode: true
        });
    }
    handleSave() {
        console.log(this.refs.titleContent.value)
        this.setState({
            title: this.refs.titleContent.value,
            author: this.refs.authorContent.value,
            year: this.refs.yearContent.value,
            genre: this.refs.genreContent.value,
            editMode: false
        });
    }

    render() {
        let titleElement, authorElement, yearElement, genreElement, buttonArea;
        if (this.state.editMode) {
            titleElement = (
                <textarea
                    ref="titleContent"
                    className="textarea"
                   defaultValue={this.state.title}
                />
            );
            authorElement = (
                <textarea
                    ref="authorContent"
                    className="textarea"
                    defaultValue={this.state.author}
                />
            );
            yearElement = (
                <textarea 
                    ref='yearContent'
                    className="textarea"
                    defaultValue={this.state.year}
                />
            );
            genreElement = (
                <textarea
                    ref="genreContent"
                    className="textarea"
                    defaultValue={this.state.genre}
                />
            )
            buttonArea = (
                <div>
                    <button className="btn btn-info" onClick={this.handleSave.bind(this)}>
                        Save Changes
              </button>
              <br></br>
              <br></br>
              <br></br>
                </div>
            );
        } else {
            titleElement= <p>{this.state.title}</p>;
            authorElement = <p>{this.state.author}</p>;
            yearElement = <p>{this.state.year}</p>;
            genreElement = <p>{this.state.genre}</p>;
                
            buttonArea = (
                <div>
                    <button
                        className="btn btn-warning"
                        onClick={this.handleEdit.bind(this)}
                    >
                        Edit Book Info
          </button>
                    <button
                        className="btn btn-danger"
                        onClick={this.props.deleteHandler.bind(this)}
                    >
                        Delete Book
          </button>
                </div>
            );
        }
        return (
            <div className="col-sm-4">
            <input type="checkbox" id={this.props.id}/>
              <label for={this.props.id}><img src={this.props.image} height="400px" width="275px" alt="Avatar" className="image"></img>
            <div className="middle">
                <div className="texts">
                    <p>Title: {titleElement}</p>
                    <p>Author: {authorElement}</p>
                    <p>Year: {yearElement}</p>
                    <p>Genre: {genreElement}</p>
                     {buttonArea}
                    <div>
                    <Link to={{pathname:'/BookInfo', state:{title:this.state.title,image: this.props.image,author:this.state.author,year:this.state.year,genre:this.state.genre,summary:this.props.summary}}}>
                    More Info
                    </Link>
                    </div>

                </div>
            </div>
            </label>
               </div> 
        )
    }
}
var i= 15;

NewBooks.defaultProps = {
    title:"",
    author:"",
    year:"",
    genre:"",
    image:"https://edgeplay.files.wordpress.com/2011/05/classic_red_book_cover_by_semireal_stock.jpg",
    summary:'What is there to say this book is awesome!!!',
    id:i++
  };

export default NewBooks;