import React from 'react';
import './App.css';
import FileDialogue from './FileDialogue';
import TimePanels from './TimePanels';

class App extends React.Component {
  state = {
    jsonFile: []
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>TimeInLieuTracker</h1>
          
          <FileDialogue                         
            fileData={data => {
              this.setState({ jsonFile: data });
            }}
          />

          <TimePanels json={this.state.jsonFile}/>

        </header>
      </div>
    );
  }
}

export default App;
