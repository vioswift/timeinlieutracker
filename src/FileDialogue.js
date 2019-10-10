import React from 'react';

function buildFileSelector(){
    const fileSelector = document.createElement('input');
    fileSelector.setAttribute('type', 'file');
    fileSelector.setAttribute('multiple', 'multiple');
    return fileSelector;
}

class FileDialogue extends React.Component {
    constructor(){
        super();

        this.state = {
            jsonFile: [],
        };
    }
    
    componentDidMount(){
        this.fileSelector = buildFileSelector();
    }

    handleFileSelect = (e) => {
        // https://developer.mozilla.org/pt-BR/docs/Web/API/FileReader/onload
        e.preventDefault();

        var file = e.target.files[0];
        var reader = new FileReader();
        reader.onload = () => {
            this.setState({ jsonFile: JSON.parse(reader.result) }, () => {
                console.log(this.state.jsonFile.settings.show_signatures);
            });            
        };

        reader.readAsText(file);
    }

    render(){
        return <input type="file" name="file" onChange={this.handleFileSelect.bind(this)}/>
    }
}

export default FileDialogue;