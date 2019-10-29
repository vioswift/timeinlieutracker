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

  save() {
    // const fs = window.require('fs');
    
    // fs.appendFile(this.state.jsonFilePath, 'Hello content!', function (err) {
    //   if (err) throw err;
    //   console.log('Saved!');
    // });

    // console.log(this.state.jsonData[0].days[0].description)

    let newState = Object.assign({}, this.state.jsonData);
    newState[0].days[0].description = "Tofu Stir Fry and other stuff";
    this.setState({jsonData: newState});

    this.state.jsonData.map(data =>
      data.days.map(days =>
        console.log(days.description)
      )
    )

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
      
          <TimePanels json={this.state.jsonData}/>

          <button onClick={this.save.bind(this)}>Save</button>

        </header>
      </div>
    );
  }
}

export default App;
