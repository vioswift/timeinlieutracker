import React from 'react';
const fs = window.require('fs');

class File extends React.Component {
    saveFile = (path, data) => {
        let writer = fs.createWriteStream(path, {flags:'w'})
        .on('error', function (err) {
            console.log(err);
        });

        writer.write(JSON.stringify(data));
    }
}

export default File;