import React from 'react';
import './App.css';
import FileDialogue from './FileDialogue';
import TimePanels from './TimePanels';
// import fs from 'fs';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      jsonFile: [],
      jsonFileName: ""
    };
}

  sayHello(e) {
    // const storeData = (data, path) => {
    //   try {
    //     fs.writeFileSync(this.state.jsonFile, JSON.stringify(data))
    //   } catch (err) {
    //     console.error(err)
    //   }
    // }

    const fs = require('fs');
    fs.appendFile('saver.json', 'testtt', (err) => {
      if (err) {
        console.error(err)
        return
      }
      //done!
    })

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>TimeInLieuTracker</h1>
          
          <FileDialogue                         
            fileData={data => {
              this.setState({ jsonFile: data });
            }}
            fileName={fileName => {
              this.setState({ jsonFileName: fileName });
            }}
          />

          {this.state.jsonFileName}

          <TimePanels json={this.state.jsonFile}/>

          <button onClick={this.sayHello}>
            Click me!
          </button>

        </header>
      </div>
    );
  }
}

export default App;
