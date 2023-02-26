import React, { Component } from 'react';
// import logo from "./logo.svg";
import "./App.css";
// import { useState } from "react";


import Table from './Table';
// import MovieForm from './MovieForm';
import movies from './movies';


function MovieIndex(){
  return <h1>Welcome to your Movie Index</h1>
}

class App extends Component {
  // set initial state of component 
  state = {movieList: movies};

  // // create simple method here to remove a movie from the index
  removeMovie = (index) => {
    //now that we've defined this.state, we can use 
    const { movieList } = this.state 
    // we can use setState to update the state 
    this.setState({
      // remove movie at passed in index by returning a new list excluding that character
      movieList: movieList.filter((_, i) => {
        return i !== index
      }),
    })
  } 

  // const MovieForm = (props) => {
//   const [title, setTitle] = useState("");
//   const [director, setDirector] = useState("");
//   const [actors, setActors] = useState("");
//   const [plot, setPlot] = useState("");
//   const [year, setYear] = useState(0);
//   const [imdbRating, setImdbRating] = useState(0);

//   console.log(title);
//   return (
//     <div>
//       <h1 className="title">Movie Form</h1>
//       <form>
//         <label>
//           Title:{" "}
//           <input
//             type="text"
//             name="titleEntry"
//             placeholder="Enter Title"
//             autoComplete="Off"
//             onChange={(event) => setTitle(event.target.value)}
//           ></input>
//         </label>
//         <br />
//         <label>
//           Director:{" "}
//           <input
//             type="text"
//             name="directorEntry"
//             placeholder="Enter Director"
//             autoComplete="Off"
//             onChange={(event) => setDirector(event.target.value)}
//           ></input>
//         </label>
//         <br />
//         <label>
//           Actors:{" "}
//           <input
//             type="text"
//             name="actorsEntry"
//             placeholder="Enter Actors"
//             autoComplete="Off"
//             onChange={(event) => setActors(event.target.value)}
//           ></input>
//         </label>
//         <br />
//         <label>
//           Plot:{" "}
//           <input
//             type="text"
//             name="plotEntry"
//             placeholder="Enter Plot"
//             autoComplete="Off"
//             onChange={(event) => setPlot(event.target.value)}
//           ></input>
//         </label>
//         <br />
//         <label>
//           Year:{" "}
//           <input
//             type="number"
//             name="yearEntry"
//             placeholder="Enter Year Released"
//             autoComplete="Off"
//             onChange={(event) => setYear(event.target.value)}
//           ></input>
//         </label>
//         <br />
//         <label>
//           IMDB Rating:{" "}
//           <input
//             type="number"
//             step="0.1"
//             name="imdbRatingEntry"
//             placeholder="Enter IMDB Rating"
//             autoComplete="Off"
//             onChange={(event) => setImdbRating(event.target.value)}
//           ></input>
//         </label>
//       </form>
//     </div>
//   );
// };

  // function App() {
    // return <MovieForm />;
  // }

  render() {  
    // we are passing the characters from state and the removeMovie function that we wrote so table can use it later on 
    return ( // make sure return only returns one html element!
      <div className="container"> 
        <MovieIndex name="Dom"/>
        {/* <MovieForm addMovie={this.addMovie}/> */}
        <Table 
          movieData={this.state.movieList} 
          removeMovie={this.removeMovie} 
        /> 
      </div>
    );
  };
};
export default App;
