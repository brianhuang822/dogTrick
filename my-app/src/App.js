// import ReactDOM from 'react-dom'
import './App.css';

function App() {
	document.title = "Dog Tricks"
  return (
    <div className="App">
	  <div className="Difficulty">
      <h1 className="App-header">
        Difficulty
      </h1>
	  <input type="range" min="0" max="3" className="Difficulty-Slider">
	  </input>
	  </div>
    </div>
  );
}

export default App;
