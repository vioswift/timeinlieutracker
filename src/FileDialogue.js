import React from 'react';

class FileDialogue extends React.Component {
    state = {
        fileName: "Choose File"
    };

    handleFileSelect = (e) => {
        var file = e.target.files[0];
        var reader = new FileReader();

        e.preventDefault();

        if (file) {
            reader.onload = () => {
                this.props.fileData(JSON.parse(reader.result));
                this.props.filePath(file.path); 
                this.setState({ fileName: file.name });
            };
            reader.readAsText(file);
        }
    }

    render() {
        return (
            <div className="custom-file noprint">
                <input type="file" onChange={this.handleFileSelect.bind(this)} className="custom-file-input" id="inputGroupFileOpen"
                aria-describedby="inputGroupFileAddon01" accept=".json"/>
                <label className="custom-file-label" htmlFor="inputGroupFileOpen">{this.state.fileName}</label>
            </div>
        );
    }
}

export default FileDialogue;