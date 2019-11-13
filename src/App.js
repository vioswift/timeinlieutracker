import React from 'react';
import FileDialogue from './FileDialogue';
import TimePanels from './TimePanels';
import 'bootstrap/dist/css/bootstrap.css';
import './style.css';

class App extends React.Component {
  state = {
    jsonData: [],
    jsonFilePath: null
  };

  render() {
    return (
      <div className="container-fluid">
          <div className="p-2"></div>
          <FileDialogue                         
            fileData={data => {
              this.setState({ jsonData: data });
            }}
            filePath={path => {
              this.setState({ jsonFilePath: path });
            }}
          />
          <p><strong>File Path:</strong> {this.state.jsonFilePath}</p>
      
          {this.state.jsonFilePath ? <TimePanels json={this.state.jsonData} filePath={this.state.jsonFilePath}/> : ''}
      </div>
    );
  }
}

export default App;
