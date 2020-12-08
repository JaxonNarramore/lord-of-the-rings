import logo from './logo.svg';
import './App.css';

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <h1>{props.post.title}</h1>
        <p>{props.post.author}</p>
        <p>{props.post.body}</p>
        <p>{props.post.comments[0]}</p>
      </header>
    </div>
  );
}

export default App;
