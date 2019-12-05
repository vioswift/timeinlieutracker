import React from 'react';
import moment from 'moment';
const fs = window.require('fs');

class File extends React.Component {
    newFileInfo = [
        {
            "file_information": {
                "version": "1.0",
                "saved": moment().format('MMMM Do YYYY, h:mm:ss A')
            },
            "settings": {
                "show_signatures": true
            },
            "days": []
        }
    ];
    dayInformation = {
        id: 0,
        date: moment().format('YYYY-MM-DD'),
        description: "",
        start_time: moment().format('hh:mm'),
        end_time: moment().format('hh:mm'),
        is_time_in_lieu: false,
        updated: moment().format('MMMM Do YYYY, h:mm:ss A')
    };

    saveFile = (path, data) => {
        data = this.updateLastSaved(data);
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

    getHighestId(array) {
        var highestId = 0;

        for(var count = 0; count < array.length; count++){ 
            if (highestId < array[count].id) {
                highestId = array[count].id;
            }
        }

        return highestId;
    }

    getNewDay(days) {
        this.dayInformation.id = this.getHighestId(days) + 1;
        return this.dayInformation;
    }

    updateLastSaved(data) {
        let getDate = moment().format('MMMM Do YYYY, h:mm:ss A');
        let savedElementId = document.getElementById("saved");
        
        data[0].settings.saved = getDate;

        if (savedElementId)
        savedElementId.innerHTML = getDate;

        return data;
    }

    getNewFileInfo() {
        return this.newFileInfo;
    }

    getFileAsText = (path) => {
        return fs.readFileSync(path, 'utf-8', (err, data) => {
            if(err){
                alert("An error ocurred reading the file styles to print:" + err.message);
                return;
            }
            
            return data;
        });
    }
}

export default File;