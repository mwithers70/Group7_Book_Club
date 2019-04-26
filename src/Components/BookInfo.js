import React, { Component } from 'react';
import '../CSS/BookInfo.css';




const BookInfo = (props) => {
  const title = props.location.state.title
  const author= props.location.state.author
  const image= props.location.state.image
  const year= props.location.state.year
  const genre= props.location.state.genre
  const summary= props.location.state.summary
  return(
    
    <div class="container">
    <div class="row">
      <div class="col">
      <img src={image} alt="Avatar" className="image2"></img>
      </div>
      <div class="col">
      <p><h4 className="head">Title:</h4> <h5 className="word">{title}</h5></p>
       <p><h4 className="head">Author:</h4><h5 className="word">{author}</h5></p>
       <p><h4 className="head">Year:</h4><h5 className="word"> {year}</h5></p>
       <p><h4 className="head">Genre:</h4><h5 className="word"> {genre}</h5></p>
       <p ><h4 className="head">Summary:</h4> <h5 className="summary">{summary}</h5></p>
      </div>
    </div>
    </div>
  )
}


export default BookInfo;







