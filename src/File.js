import React from 'react';
const fs = window.require('fs');

class File extends React.Component {
    newFileInfo = [
        {
            "file_information": {
                "version": "1.0"
            },
            "settings": {
                "show_signatures": true
            },
            "days": []
        }
    ]

    saveFile = (path, data) => {
        fs.writeFileSync(path, JSON.stringify(data), function(err){ 
            if (err) {
                console.log(err);
            }
        })
    }

    newFile = (path) => {
        fs.writeFileSync(path, JSON.stringify(this.newFileInfo), function(err){ 
            if (err) {
                console.log(err);
            }
        })
    }

    getNewFileInfo() {
        return this.newFileInfo;
    }
}

export default File;