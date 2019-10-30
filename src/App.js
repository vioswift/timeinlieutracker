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

  addTimePanel(){
    let newState = this.state.jsonData;

    newState[0].days.push(            
    {
      id: newState[0].days.length + 1,
      date: "00/00/0000",
      description: "new",
      start_time: "00/00/0000",
      end_time: "00/00/0000",
      is_time_in_lieu: true,
      updated: "00/00/0000 00:00:00"
    });
    this.setState({jsonData: newState});
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

          <button onClick={this.addTimePanel.bind(this)}>Add Panel</button>

        </header>
      </div>
    );
  }
}

export default App;
