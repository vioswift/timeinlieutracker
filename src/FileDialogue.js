import React from 'react';

class FileDialogue extends React.Component {
    state = {
        fileName: "Choose File"
    };

    buildFileSelector(){
        const fileSelector = document.createElement('input');
    
        fileSelector.setAttribute('type', 'file');
        fileSelector.setAttribute('multiple', 'multiple');
    
        return fileSelector;
    }

    componentDidMount(){
        this.fileSelector = this.buildFileSelector();
    }

    handleFileSelect = (e) => {
        var file = e.target.files[0];
        var reader = new FileReader();

        e.preventDefault();

        reader.onload = () => {
            this.props.fileData(JSON.parse(reader.result));
            this.props.filePath(file.path); 
            this.setState({fileName: file.name});
        };

        reader.readAsText(file);
    }

    render(){
        return (
            <div className="input-group">
                <div className="custom-file">
                    <input type="file" onChange={this.handleFileSelect.bind(this)} className="custom-file-input" id="inputGroupFile01"
                    aria-describedby="inputGroupFileAddon01"/>
                    <label className="custom-file-label" htmlFor="inputGroupFile01">{this.state.fileName}</label>
                </div>
            </div>
        );
    }
}

export default FileDialogue;