import React from 'react';
import {NavLink} from 'react-router-dom';
import '../CSS/Navigation.css';
const Navigation = () =>{
    return (
<div>
<nav class="navbar navbar-expand-lg navbar-light sticky-top bg-dark">
  <a class="navbar-brand"> <img src="https://files.slack.com/files-pri/TH2CJVD6H-FHZA8234H/g7bc.png" heightt="50px" width="50px" alt=""></img></a>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <a class="nav-item nav-link" href="#"><NavLink to="/">Book Shelf</NavLink></a>
    </div>
  </div>
</nav>
</div>       
    )
  }

export default Navigation;