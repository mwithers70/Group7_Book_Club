import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Navigation from "./Navigation";
import BookInfo from './BookInfo';
import BookShelf from './BookShelf';
import React from 'react';

class Browser extends React.Component{
    render(){
      return(
    
        <BrowserRouter>
        <Navigation/>
        <Switch>
        <Route path="/" component={BookShelf}exact />
        <Route path="/BookInfo" component={BookInfo}/>
        </Switch>
        </BrowserRouter>
        
        
      );
    }
    }
    
    export default Browser;