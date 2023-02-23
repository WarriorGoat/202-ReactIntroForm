import logo from './logo.svg';
import './App.css';
import { useState } from "react";




function App() { 
  return (
    <MovieForm/>
); 
}


const MovieForm = (props) => {
  const [title, setTitle] = useState("");
  const [director, setDirector] = useState("");
  const [actors, setActors] = useState("");
  const [plot, setPlot] = useState("");
  const [year, setYear] = useState(0);
  const [imdbRating, setImdbRating] = useState(0);

  console.log(title);
  return (
    <div>
      <h1 className="title">
        Movie Form
      </h1>
      <form>
        <label>Title: <input type="text" name="titleEntry" placeholder="Enter Title" autoComplete='Off' onChange={event=>setTitle(event.target.value)}></input></label><br/>
        <label>Director: <input type="text" name="directorEntry" placeholder="Enter Director" autoComplete='Off' onChange={event=>setDirector(event.target.value)}></input></label><br/>
        <label>Actors: <input type="text" name="actorsEntry" placeholder="Enter Actors" autoComplete='Off' onChange={event=>setActors(event.target.value)}></input></label><br/>
        <label>Plot: <input type="text" name="plotEntry" placeholder="Enter Plot" autoComplete='Off' onChange={event=>setPlot(event.target.value)}></input></label><br/>
        <label>Year: <input type="number" name="yearEntry" placeholder="Enter Year Released" autoComplete='Off' onChange={event=>setYear(event.target.value)}></input></label><br/>
        <label>IMDB Rating: <input type="number" step="0.1" name="imdbRatingEntry" placeholder="Enter IMDB Rating" autoComplete='Off' onChange={event=>setImdbRating(event.target.value)}></input></label>

      </form>

    </div>

  )
}

export default App;
