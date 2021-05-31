// import ReactDOM from "react-dom"
import {makeStyles} from "@material-ui/core/styles"
import Slider from "@material-ui/core/Slider"
import "./App.css";

function App() {
	document.title = "Dog Tricks"
  return (
    <div className="App">
      <div className="Difficulty">
      <h1 className="App-header">
        Difficulty
      </h1>
      <Slider/>
      </div>
    </div>
  );
}

export default App;
