import React, {Component} from 'react';
import propTypes from 'prop-types';
import '../css/data.css';

class data extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="col-sm-6">
            <div className="card card-view">
            <div className="card-body">
            {/* <h5 className="card-title">{this.props.title}</h5>
            <p>{this.props.body}</p>
            <button className="btn btn-warning">Edit</button>
            <button className="btn btn-danger">Delete</button> */}


            </div>
            </div>
            </div>
        )
    }
}

// data.defaultProps = {
//     title: "a cool title",
//     body: "a cool body",
// };

// data.propTypes = {
//     title: propTypes.string

}

export default data;