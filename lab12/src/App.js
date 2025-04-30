//import React from 'react';
//import logo from './logo.svg';
//import './App.css';
import logo from './logo.svg';
import './App.css';
import MultiButton from './multiButton'
import HelloCGU from './cgu_hello';

function App() {
  return (
    <div className="APP">
      <div>
        { HelloCGU() }
      </div>
      <div>
      { MultiButton(10) }
      </div>
    </div>
  );
}

export default App;
