import React from "react";
import Weather from "./Weather";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
       <Weather defaultCity="Lisbon"/> 
       <footer>
        This project was coded by <a href="https://bespoke-bienenstitch-78d06f.netlify.app/" target="_blank" rel="noopener noreferrer">Dalete Pokrywiesky</a> and is <a href="https://github.com/DaleteB/weather-react-app" target="_blank" rel="noopener noreferrer">open-source on GitHub</a>
      </footer>
      </div>
      
    </div>
  );
}

export default App;
