import React, {Component} from 'react';
import '../CSS/books.css';

class Book extends Component{
    constructor(props){
        super(props);
        this.props = props;
        this.state = {
            read: false,
        }
    }

    render(){
        return (
            <div className= 'Book'>
                <div className="card text-white bg-secondary mb-2">
                    <div className="card-body">
                        <img className="Book-cover" src={require(`../${this.props.image}`)}></img>
                    </div>
                </div>
                <button type='button' onClick={this.handleClick.bind(this)}>Read This Book</button>
            </div>
        )
    }

    read() {
        this.setState( {
            read: true,
        });
    }

    handleClick() {
        this.read();
    }


}

export default Book;