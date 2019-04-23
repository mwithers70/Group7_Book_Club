import React, { Component } from 'react';
import '../css/Board.css';
import Books from './books'

class bookShelf extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <div className="div-board">
                    <div className="row">
                    <div>
                    <Books title="Class Notes" body="Use Constructors when extending another class" />
                    </div>
                    <div>
                    <Books title="My address" body="Nunya"/>
                    </div>
                    <div>
                    <Books title="React Notes" body="Everything in react is a component"/>
                </div>
                </div>
                <br>
                </br>
                <div>
                    <button className=" btn btn-success">
                        Add</button>
                </div>
            </div>
            </div>
        )
    }
}
export default bookShelf;