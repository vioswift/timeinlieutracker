import React from 'react';
import './App.css';

function App() {
  function buildFileSelector(){
    const fileSelector = document.createElement('input');
    fileSelector.setAttribute('type', 'file');
    fileSelector.setAttribute('multiple', 'multiple');
    return fileSelector;
  }
  
  return (
    componentDidMount() {
      this.fileSelector = buildFileSelector();
    }
    
    handleFileSelect = (e) => {
      e.preventDefault();
      this.fileSelector.click();
    }

    <div className="App">
      <header className="App-header">
        <h1>TimeInLieuTracker</h1>
        <a href="" onClick={this.handleFileSelect}>Select files</a>
      </header>
    </div>
  );
}

export default App;
