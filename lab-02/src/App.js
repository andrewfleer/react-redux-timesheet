import React from 'react';
import './App.css';
import Projects from "./projects/Projects";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="containter">
          <Projects />
        </div>
      </div>
    );
  }
}

export default App;
