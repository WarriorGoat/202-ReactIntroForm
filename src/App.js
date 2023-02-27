import React, { Component } from 'react';
// import logo from "./logo.svg";
import "./App.css";
// import { useState } from "react";
import Header from './Header';
import Table from './Table';
import movies from './movies'; //data file of movies
import MovieForm from './MovieForm';

class App extends Component {
  
  state = {movieList: movies};  // set initial state of component 

  // // create simple method here to remove a movie from the index
  removeMovie = (index) => {
    const { movieList } = this.state 
    // now that we've defined this.state, we can use setState to update the state 
    this.setState({ // remove movie at passed in index by returning a new list excluding that character
      movieList: movieList.filter((_, i) => {
        return i !== index
      }),
    })
  } 


  addMovie = (index) => {
    const {movieList} = this.state
    this.setState({

    })
  }

  render() {  
    // we are passing the movies from state and the removeMovie function that we wrote so table can use it later on 
    return ( // make sure return only returns one html element!
      <div className="container"> 
        <Header name="Dom"/>
        
        <Table 
          movieData={this.state.movieList} 
          removeMovie={this.removeMovie} 
        /> 
        {/* <MovieForm addMovie={this.addMovie}/> */}
      </div>
    );
  };
};
export default App;
