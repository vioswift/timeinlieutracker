import React from 'react';
import FileDialogue from './FileDialogue';
import NewFile from './NewFile';
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
          <div className="row">
              <div className="col-auto">
                <div className="input-group">
                  <FileDialogue                         
                    fileData={data => {
                      this.setState({ jsonData: data });
                    }}
                    filePath={path => {
                      this.setState({ jsonFilePath: path });
                    }}
                  />
                </div>
            </div>
            <div className="col-auto">
              <NewFile                         
                fileData={data => {
                  this.setState({ jsonData: data });
                }}
                filePath={path => {
                  this.setState({ jsonFilePath: path });
                }}
              />
            </div>
          </div>
          <small><strong>File Path:</strong> {this.state.jsonFilePath}</small>
      
          {this.state.jsonFilePath ? <TimePanels json={this.state.jsonData} filePath={this.state.jsonFilePath}/> : ''}
      </div>
    );
  }
}

export default App;
