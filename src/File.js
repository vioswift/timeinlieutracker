import React from 'react';
const fs = window.require('fs');

class File extends React.Component {
    saveFile = (path, data) => {
        fs.writeFileSync(path, JSON.stringify(data), function(err){ 
            if (err) {
                console.log(err);
            }
        })
    }
}

export default File;