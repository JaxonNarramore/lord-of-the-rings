import './App.css';
import Movie from "./Movie";

function App(props) {
  let title = "The Fellowship of the Ring"
  let hours = 2
  let minuets = 58

  let movieTwo = {
    title: "The Two Towers", 
    hours: 2,
    minuets: 59,
  }

  let movieThree = {
    title: "The Return of the King", 
    hours: 3,
    minuets: 21,
  }
  return (
    <div className="App">
      <header className="App-header">
        <Movie 
          title={title}
          hours={hours}
          minuets={minuets}
        />

        <Movie 
          title={movieTwo.title}
          hours={movieTwo.hours}
          minuets={movieTwo.minuets}
        />

        <Movie 
          title={movieThree.title}
          hours={movieThree.hours}
          minuets={movieThree.minuets}
        />
      </header>
    </div>
  );
}

export default App;
