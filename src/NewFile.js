import React from 'react';
import File from './File';
var electron = window.require('electron').remote;

class NewFile extends React.Component {
    state = {
        fileName: null
    };

    handleClick = (e) => {
        let options = {
            title: "Save file - JSON",
            buttonLabel : "Save JSON File",
            filters :[
                {name: 'JSON', extensions: ['json']}
            ]
        }

        electron.dialog.showSaveDialog(window.mainWindow, options)
        .then(result => {
            new File().newFile(result.filePath);
            this.props.fileData(new File().getNewFileInfo());
            this.props.filePath(result.filePath); 
        }).catch(err => {
            // console.log(err);
            // electron.dialog.showMessageBox(window.mainWindow, {
            //     title: 'Error: Creating a new file',
            //     buttons: ['Dismiss'],
            //     type: 'warning',
            //     message: 'There was an error creating the new file',
            // });
        });
    }

    handleChange = (e) => {
        this.setState({ fileName: e.target.value });
    }

    render() {
        return (
            <div className="input-group mb-3">
                <button type="button" onClick={this.handleClick.bind(this)} className="btn btn-primary">New File</button>
            </div>
        );
    }
}

export default NewFile;