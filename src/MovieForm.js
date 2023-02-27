import React, { Component } from "react";
import "./MovieForm.css";

class MovieForm extends Component {
  constructor(props) {
    super(props);
    this.initalState = {
      title: "",
      director: "",
      actors: "",
      plot: "",
      year: 0,
      imdbRating: 0,
      dateAdded: new Date().toLocaleDateString(),
    };
    this.state = this.initalState;
  }

  handleChange = (event) => {
    console.log("handling change");
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  submitMovieForm = () => {
    console.log("onFormSubmit");
    // event.preventDefault();
    const newDate = new Date().toLocaleDateString();
    this.setState({ dateAdded: newDate });
    this.props.handleSubmit(this.state);
    this.initalState.dateAdded = newDate;
    this.setState(this.initalState);
  };

  render() {
    const { title, director, actors, plot, year, imdbRating } = this.state;
    return (
      <form>
        <label htmlFor="year">Year: </label>
        <input
          type="number"
          name="year"
          id="year"
          autoComplete="Off"
          value={year}
          onChange={this.handleChange}
        ></input>
        <br />
        <label htmlFor="title">Title: </label>
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Enter Title"
          autoComplete="Off"
          value={title}
          onChange={this.handleChange}
        />
        <br />
        <label htmlFor="director">Director: </label>
        <input
          type="text"
          name="director"
          id="director"
          placeholder="Enter Director"
          autoComplete="Off"
          value={director}
          onChange={this.handleChange}
        />
        <br />
        <label htmlFor="imdbRating">IMDB Rating: </label>
        <input
          type="number"
          step="0.1"
          name="imdbRating"
          id="imdbRating"
          autoComplete="Off"
          value={imdbRating}
          onChange={this.handleChange}
        />
        <br />
        <label htmlFor="plot">Plot: </label>
        <input
          type="text"
          name="plot"
          id="plot"
          placeholder="Enter Plot"
          autoComplete="Off"
          value={plot}
          onChange={this.handleChange}
        />
        <br />
        <label htmlFor="actors">Actors: </label>
        <input
          type="text"
          name="actors"
          id="actors"
          placeholder="Enter Actors"
          autoComplete="Off"
          value={actors}
          onChange={this.handleChange}
        />
        <br />

        <input type="button" value="Submit" onClick={this.submitMovieForm} />
      </form>
    );
  }
}

export default MovieForm;
