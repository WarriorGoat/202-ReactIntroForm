//Table React Component 

import React, { Component } from "react";

// create two simple function components to make our table code more readable


//TABLE HEADER SIMPLE COMPONENT
const TableHeader = () => {
    return (
        <thead>
              <tr>
                <th>Year</th>
                <th>Title</th>
                <th>Director</th>
                <th>IMDB Rating</th>
                <th>Plot</th>
                <th>Actors</th>
              </tr>
            </thead>
    );
}

//TABLE BODY SIMPLE COMPONENT 
const TableBody = (props) => {


    //construct rows
    // use map to iterate over each row and wrap it in a html table row  
    //register an on click listener to remove 
    const rows = props.data.map((row, index) => {
      return (
        <tr key={index}>
          <td> {row.year} </td>
          <td>{row.title}</td>
          <td>{row.director}</td>
          <td> {row.imdbRating} </td>
          <td>{row.plot}</td>
          <td>{row.actors}</td>
          <td><button onClick={() => props.removeMovie(index)}> Delete</button></td>
        </tr>
      )
    })
    //return rows wrapped in tbody
    return <tbody>{rows}</tbody>
  }
// TABLE is our main Component
class Table extends Component {
    render() {
        //read props passed in from App.js
        const { 
          movieData, 
          removeMovie
        } = this.props;

        return (
          <table>
            <TableHeader/>
            <TableBody 
              data={movieData} 
              removeMovie={removeMovie}
             />
          </table>
        )
      }
}

export default Table