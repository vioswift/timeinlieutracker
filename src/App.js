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

    // const fs = require('fs');
    // fs.appendFile('saver.json', 'testtt', (err) => {
    //   if (err) {
    //     console.error(err)
    //     return
    //   }
    //   //done!
    // })

    // var fs = require('browserify-fs');
    // fs.appendFile('saver.json', 'Hello world!\n', function(err, data) {
    //   if (err) {
    //     console.error(err)
    //     return
    //   }

    //   fs.readFile('saver.json', 'utf-8', function(err, data) {
    //     console.log(data);
    //   });
    // });

    var fs = require('browserify-fs');
    fs.writeFile('./Desktop/saver.json', 'Hello world!\n', function() {
      fs.readFile('./Desktop/saver.json', 'utf-8', function(err, data) {
        console.log(data);
      });
    });

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
