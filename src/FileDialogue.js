import React from 'react';

class FileDialogue extends React.Component {
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
        };

        reader.readAsText(file);
    }

    render(){
        return <input type="file" name="file" onChange={this.handleFileSelect.bind(this)}/>
    }
}

export default FileDialogue;