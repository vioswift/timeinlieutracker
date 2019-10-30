import React from 'react';
const fs = window.require('fs');

class TimePanel extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            color: "transparent",
            activeColor: "#CCCC00",
            defaultColor: "transparent"
        };
    }

    saveFile() {
        let writer = fs.createWriteStream(this.props.filePath, {flags:'w'})
        .on('error', function (err) {
            console.log(err);
        });

        writer.write(JSON.stringify(this.props.jsonData));
    }

    removeTimePanel() {
        let days = this.props.jsonData[0].days;
        let dayId = this.props.day.id;

        for(var count = 0; count < days.length; count++){ 
            if (days[count].id === dayId) {
                days.splice(count, 1); 
            }
        }
        // this.saveFile();

        // ############ this needs to be able to remove items from the DOM
    }

    changeBackground(checked) {
        this.setState(checked ? {color: this.state.activeColor} : {color: this.state.defaultColor});
    }

    componentDidMount() {
        this.changeBackground(this.props.day.is_time_in_lieu);
    }

    toggleCheckboxChange = (e) => {
        let newState = this.props.day;

        newState.is_time_in_lieu = e.target.checked;
        this.setState({day: newState});
        this.changeBackground(e.target.checked);
        this.saveFile();
    }

    descriptionChange = (e) => {
        let newState = this.props.day;

        newState.description = e.target.value;
        this.setState({day: newState});
        this.saveFile();
    }

    dateChange = (e) => {
        let newState = this.props.day;

        newState.date = e.target.value;
        this.setState({day: newState});
        this.saveFile();
    }

    startTimeChange = (e) => {
        let newState = this.props.day;

        newState.start_time = e.target.value;
        this.setState({day: newState});
        this.saveFile();
    }

    endTimeChange = (e) => {
        let newState = this.props.day;

        newState.end_time = e.target.value;
        this.setState({day: newState});
        this.saveFile();
    }

    render() {
        const { day } = this.props;

        return (
            <div style={{background: this.state.color}}>
                <button type="submit" onClick={this.removeTimePanel.bind(this)}>DELETE</button><br/>
                Date: <input type="text" name="fname" onChange={this.dateChange} defaultValue={day.date}/><br/>
                Description: <input type="text" name="fname" onChange={this.descriptionChange} defaultValue={day.description}/><br/>
                Start Time: <input type="text" name="fname" onChange={this.startTimeChange} defaultValue={day.start_time}/><br/>
                End Time: <input type="text" name="fname" onChange={this.endTimeChange} defaultValue={day.end_time}/><br/>
                Is Time In Lieu: <input type="checkbox" name="vehicle1" value="Bike" onChange={this.toggleCheckboxChange} defaultChecked={day.is_time_in_lieu}/>

                <br/><br/>
            </div>
        );
    }
}

export default TimePanel;