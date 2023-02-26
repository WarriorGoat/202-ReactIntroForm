import React, { Component } from 'react';

class MovieForm extends Component {
    // constructors are initialized when Form is created (instantiated)// we set the initial state of our form and save it to state.
    constructor(props){
        super(props); //inheriting props from Component
        this.initalState = {  // set the initial state of the Form
            title: '',
            director: '',
            actors: '',
            plot: '',
            year: '',
            imdbRating: ''
        };        
        this.state = this.initalState; //set our initial state to state.
    }

    handleChange = event => {
        const { name, value } = event.target; //get name, value out of target (element that changed)

        this.setState({
            [name]: value  //update our state 
        });
    }

    onFormSubmit = (event) => {
        event.preventDefault(); //standard code for onSubmits
        this.props.addCharacter(this.state);  //set the current state of our form to the handle submit
        this.setState(this.initialState);  //clear inputs by setting form to inital state
    }

    // const MovieForm = (props) => {
    //     const [title, setTitle] = useState("");
    //     const [director, setDirector] = useState("");
    //     const [actors, setActors] = useState("");
    //     const [plot, setPlot] = useState("");
    //     const [year, setYear] = useState(0);
    //     const [imdbRating, setImdbRating] = useState(0);
    
    // console.log(title);

    return (){
      <div>
        <h1 className="title">Movie Form</h1>
        <form>
          <label>
            Title:{" "}
            <input
              type="text"
              name="titleEntry"
              placeholder="Enter Title"
              autoComplete="Off"
              onChange={(event) => setTitle(event.target.value)}
            ></input>
          </label>
          <br />
          <label>
            Director:{" "}
            <input
              type="text"
              name="directorEntry"
              placeholder="Enter Director"
              autoComplete="Off"
              onChange={(event) => setDirector(event.target.value)}
            ></input>
          </label>
          <br />
          <label>
            Actors:{" "}
            <input
              type="text"
              name="actorsEntry"
              placeholder="Enter Actors"
              autoComplete="Off"
              onChange={(event) => setActors(event.target.value)}
            ></input>
          </label>
          <br />
          <label>
            Plot:{" "}
            <input
              type="text"
              name="plotEntry"
              placeholder="Enter Plot"
              autoComplete="Off"
              onChange={(event) => setPlot(event.target.value)}
            ></input>
          </label>
          <br />
          <label>
            Year:{" "}
            <input
              type="number"
              name="yearEntry"
              placeholder="Enter Year Released"
              autoComplete="Off"
              onChange={(event) => setYear(event.target.value)}
            ></input>
          </label>
          <br />
          <label>
            IMDB Rating:{" "}
            <input
              type="number"
              step="0.1"
              name="imdbRatingEntry"
              placeholder="Enter IMDB Rating"
              autoComplete="Off"
              onChange={(event) => setImdbRating(event.target.value)}
            ></input>
          </label>
        </form>
      </div>
    };
  };
}
// }
export default MovieForm