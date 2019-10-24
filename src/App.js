import React from 'react';
import './App.css';
import FileDialogue from './FileDialogue';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>TimeInLieuTracker</h1>
        
        <FileDialogue/>
        {/* <p>File Version: {FileDialogue.state.jsonFile.settings.show_signatures}</p> */}
      </header>
    </div>
  );
}

export default App;
