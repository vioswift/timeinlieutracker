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
        
        // e.preventDefault();
        // this.fileSelector.click();
        
        // console.log(e.target.files[0]);

        // this.setState({ jsonFile: JSON.parse(e.target.result) }, () => {
        //     console.log(this.state.jsonFile);
        // });

        this.setState({ jsonFile: JSON.parse(JSON.stringify(e.target.files[0])) }, () => {
            console.log(this.state.jsonFile);
            console.log(this.state.jsonFile.fruit.value);
        });
    }

    render(){
        return <input type="file" name="file" onChange={this.handleFileSelect}/>
    }
}

export default FileDialogue;