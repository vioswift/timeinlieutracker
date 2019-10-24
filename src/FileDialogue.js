import React from 'react';

function buildFileSelector(){
    const fileSelector = document.createElement('input');
    fileSelector.setAttribute('type', 'file');
    fileSelector.setAttribute('multiple', 'multiple');
    return fileSelector;
}

class FileDialogue extends React.Component {
    componentDidMount(){
        this.fileSelector = buildFileSelector();
    }

    handleFileSelect = (e) => {
        var file = e.target.files[0];
        var reader = new FileReader();

        e.preventDefault();

        reader.onload = () => {
            this.props.fileData(JSON.parse(reader.result));           
        };

        reader.readAsText(file);
    }

    render(){
        return <input type="file" name="file" onChange={this.handleFileSelect.bind(this)}/>
    }
}

export default FileDialogue;