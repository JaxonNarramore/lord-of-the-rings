import React, { Component } from "react";

// function Movie(props) {
//     return (
//         <div>
//             <h1>Lord of the rings: {props.title}</h1>
//     <p>Runtime: {props.hours} Hours {props.minuets} Minuets</p>
//         </div>
//     );
// }

class Movie extends Component {
    render() {
        return(
        <div>
            <h1>Lord of the rings: {this.props.title}</h1>
    <p>Runtime: {this.props.hours} Hours {this.props.minuets} Minuets</p>
        </div>
        );
    }
}



export default Movie;