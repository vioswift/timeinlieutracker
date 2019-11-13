import React from 'react';
import NewFile from './NewFile';

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
                this.setState({fileName: file.name});
            };
            reader.readAsText(file);
        }
    }

    render() {
        return (
            <div className="row">
                <div className="col-auto">
                    <div className="input-group">
                        <div className="custom-file">
                            <input type="file" onChange={this.handleFileSelect.bind(this)} className="custom-file-input" id="inputGroupFileOpen"
                            aria-describedby="inputGroupFileAddon01" accept=".json"/>
                            <label className="custom-file-label" htmlFor="inputGroupFileOpen">{this.state.fileName}</label>
                        </div>
                    </div>
                </div>
                <div className="col-auto">
                    <NewFile/>
                </div>
            </div>
        );
    }
}

export default FileDialogue;