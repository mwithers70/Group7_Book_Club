import React, { Component } from 'react';
import '../CSS/books.css';
import {Link} from 'react-router-dom';


class Book extends Component {
    constructor(props) {
        super(props);
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
            <input type="checkbox" id={this.props.title} />
              <label for={this.props.title}><img src={require(`../../${this.props.image}`)} alt="Avatar" className="image"></img>
            <div className="middle">
                    <p>Title: {titleElement}</p>
                    <p>Author: {authorElement}</p>
                    <p>Year: {yearElement}</p>
                    <p>Genre: {genreElement}</p>
                     {buttonArea}
                    <div>
                    <Link to={{pathname:'/BookInfo', state:{title:this.state.title,image:require(`../../${this.props.image}`),author:this.state.author,year:this.state.year,genre:this.state.genre,summary:this.props.summary }}}>
                    More Info
                    </Link>
                    </div>

                
            </div>
            </label>
               </div> 
        )
    }
}

export default Book;