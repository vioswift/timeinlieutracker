import React from 'react';
import File from './File';
const fs = window.require('fs');

class NewFile extends React.Component {
    addTimePanel() {
        let newState = this.props.json;
        let days = newState[0].days;


        
        new File().saveFile(this.props.filePath, this.props.json);
    }

    handleFileSelect = (e) => {
        var file = e.target.files[0];
        var reader = new FileReader();

        new File().saveFile(file.path, this.props.json);

        e.preventDefault();

        // if (file) {
        //     reader.onload = () => {
        //         this.props.fileData(JSON.parse(reader.result));
        //         this.props.filePath(file.path); 
        //         // this.setState({fileName: file.name});


        //     };
        //     reader.readAsText(file);
        // }
    }

    handleClick() {
        document.getElementById("inputGroupFileFolder").click();
    }

    render() {
        return (
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Untitled" aria-label="Untitled" aria-describedby="basic-addon2"/>
                <div className="input-group-append">
                    <button type="button" className="input-group-text" onClick={this.handleClick}>New File</button>
                    <input directory="" webkitdirectory="" type="file" onChange={this.handleFileSelect.bind(this)} className="btn btn-outline-secondary" id="inputGroupFileFolder" hidden/>
                </div>
            </div>
        );
    }
}

export default NewFile;