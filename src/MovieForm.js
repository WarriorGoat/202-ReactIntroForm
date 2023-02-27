import React, { Component } from 'react'
import movies from "./movies";

class MovieForm extends Component {

    initalState = {  
        title: '',
        director: '',
        actors: '',
        plot: '',
        year: '',
        imdbRating: ''
    };        
    state = this.initalState;



    handleChange = event => {
        const { name, value } = event.target; 
        this.setState({
            [name]: value, 
        })
    };

    render() {
        const { name, value } = this.state;
        return (
            <form>
            <label htmlFor='titleEntry'>
                Title: 
                <input
                type="text"
                name="titleEntry"
                id='titleEntry'
                placeholder="Enter Title"
                autoComplete="Off"
                value={title}
                onChange = {this.handleChange}
                ></input>
            </label>
            <br />
            <label htmlFor='directorEntry'>
                Director: 
                <input
                type="text"
                name="directorEntry"
                id='directorEntry'
                placeholder="Enter Director"
                autoComplete="Off"
                value={director}
                onChange = {this.handleChange}
                ></input>
            </label>
            <br />
            <label htmlFor='actorsEntry'>
                Actors: 
                <input
                type="text"
                name="actorsEntry"
                id='actorsEntry'
                placeholder="Enter Actors"
                autoComplete="Off"
                value={actors}
                onChange = {this.handleChange}
                ></input>
            </label>
            <br />
            <label htmlFor='plotEntry'>
                Plot: 
                <input
                type="text"
                name="plotEntry"
                id='plotEntry'
                placeholder="Enter Plot"
                autoComplete="Off"
                value={plot}
                onChange = {this.handleChange}
                ></input>
            </label>
            <br />
            <label htmlFor='yearEntry'>
                Year: 
                <input
                type="number"
                name="yearEntry"
                id='yearEntry'
                placeholder="Enter Year Released"
                autoComplete="Off"
                value={year}
                onChange = {this.handleChange}
                ></input>
            </label>
            <br />
            <label htmlFor='imdbRatingEntry'>
                IMDB Rating: 
                <input
                type="number"
                step="0.1"
                name="imdbRatingEntry"
                id='imdbRatingEntry'
                placeholder="Enter IMDB Rating"
                autoComplete="Off"
                value={imdbRating}
                onChange = {this.handleChange}
                ></input>
            </label>
            </form>
        );
    };
}

export default MovieForm