import React from 'react';
import TimePanels from './TimePanels';

function buildFileSelector(){
    const fileSelector = document.createElement('input');
    fileSelector.setAttribute('type', 'file');
    fileSelector.setAttribute('multiple', 'multiple');
    return fileSelector;
}

class FileDialogue extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            jsonFile: []
        };
    }
    
    componentDidMount(){
        this.fileSelector = buildFileSelector();
    }

    handleFileSelect = (e) => {
        var file = e.target.files[0];
        var reader = new FileReader();

        e.preventDefault();

        reader.onload = () => {
            this.setState({ jsonFile: JSON.parse(reader.result) }, () => {
                // console.log(this.state.jsonFile.days);
            });            
        };

        reader.readAsText(file);
    }

    render(){
        return (
            <div>
                <input type="file" name="file" onChange={this.handleFileSelect.bind(this)}/>
                <TimePanels json={this.state.jsonFile}/>
            </div>
        );
    }
}

export default FileDialogue;