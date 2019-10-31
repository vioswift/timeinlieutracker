import React from 'react';
import './App.css';
import FileDialogue from './FileDialogue';
import TimePanels from './TimePanels';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      jsonData: [],
      jsonFilePath: "None"
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>TimeInLieuTracker</h1>
          
          <FileDialogue                         
            fileData={data => {
              this.setState({ jsonData: data });
            }}
            filePath={path => {
              this.setState({ jsonFilePath: path });
            }}
          />

          <p><strong>File Path:</strong> {this.state.jsonFilePath}</p>
      
          <TimePanels json={this.state.jsonData} filePath={this.state.jsonFilePath}/>
        </header>
      </div>
    );
  }
}

export default App;
