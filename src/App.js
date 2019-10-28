import React from 'react';
import './App.css';
import FileDialogue from './FileDialogue';
import TimePanels from './TimePanels';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      jsonFile: [],
      jsonFileName: "",
      file: ""
    };
}

  sayHello(e) {
    // const fs = app.require('fs');
    
    // window.Electron.fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
    //   if (err) throw err;
    //   console.log('Saved!');
    // });
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
            file={file => {
              this.setState({ file: file });
            }}
          />

          {this.state.jsonFileName}

          <TimePanels json={this.state.jsonFile}/>

          <button onClick={this.sayHello(this.state.file)}>
            Click me!
          </button>

        </header>
      </div>
    );
  }
}

export default App;
