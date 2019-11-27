import React from 'react';
import FileDialogue from './FileDialogue';
import NewFile from './NewFile';
import TimePanels from './TimePanels';
import 'bootstrap/dist/css/bootstrap.css';
import css from './style.css';

class App extends React.Component {
  state = {
    jsonData: [],
    jsonFilePath: null
  };

  print() {
    let printWindow = window.open("data:text/html;charset=utf-8,", "", "");
    printWindow.document.write("<!DOCTYPE html><html><head>");
    printWindow.document.write('<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.0/css/bootstrap.min.css" integrity="sha384-SI27wrMjH3ZZ89r4o+fGIJtnzkAnFs3E4qz9DIYioCQ5l9Rd/7UAa8DHcaL8jkWt" crossorigin="anonymous">');
    printWindow.document.write("</head><body>");
    printWindow.document.write(document.getElementById("tableInformation").innerHTML);
    printWindow.document.write("</body></html>");

    printWindow.onload = (event) => {
      printWindow.window.print();
    };
    
    // printWindow.close();
  }

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
            
          <div id="tableInformation">
            {this.state.jsonFilePath ? <TimePanels json={this.state.jsonData} filePath={this.state.jsonFilePath}/> : ''}
          </div>
          
          <button type="button" className="btn btn-success noprint" onClick={this.print}>Print</button>
      </div>
    );
  }
}

export default App;
