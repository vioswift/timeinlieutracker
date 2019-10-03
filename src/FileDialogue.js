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
            jsonFile: {}
        };
    }
    componentDidMount(){
        this.fileSelector = buildFileSelector();
    }

    handleFileSelect = (e) => {
        e.preventDefault();
        this.fileSelector.click();
        

        // this.setState({ jsonFile: JSON.parse(e.target.result) }, () => {
        //     console.log(this.state.jsonFile);
        // });
    }

    render(){
        return <a href="" onClick={this.handleFileSelect}>Open File</a>
    }
}

export default FileDialogue;