import React from 'react';
import logo from './logo.svg';
import './App.css';
import { TestComponent } from './components/test-component';
import { MapComponent } from './components/map-component';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <MapComponent startHeight={200} startWidth={200}/>
      </header>
    </div>
  );
}

export default App;
