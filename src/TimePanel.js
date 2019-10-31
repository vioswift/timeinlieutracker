import React from 'react';
import File from './File';
import moment from 'moment';

class TimePanel extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            color: "transparent",
            activeColor: "#CCCC00",
            defaultColor: "transparent",
            renderChild: true,
            dateFormat: "MMMM Do YYYY, h:mm:ss a"
        };
    }

    componentDidMount() {
        this.changeBackground(this.props.day.is_time_in_lieu);
    }

    saveFile() {
        new File().saveFile(this.props.filePath, this.props.jsonData);
    }

    removeTimePanel() {
        this.props.removeTimePanel(this.props.day.id);
    }

    changeBackground(checked) {
        this.setState(checked ? {color: this.state.activeColor} : {color: this.state.defaultColor});
    }

    toggleCheckboxChange = (e) => {
        let newState = this.props.day;

        newState.is_time_in_lieu = e.target.checked;
        newState.updated = moment().format(this.state.dateFormat);
        this.setState({day: newState});
        this.changeBackground(e.target.checked);
        this.saveFile();
    }

    descriptionChange = (e) => {
        let newState = this.props.day;

        newState.description = e.target.value;
        newState.updated = moment().format(this.state.dateFormat);
        this.setState({day: newState});
        this.saveFile();
    }

    dateChange = (e) => {
        let newState = this.props.day;

        newState.date = e.target.value;
        newState.updated = moment().format(this.state.dateFormat);
        this.setState({day: newState});
        this.saveFile();
    }

    startTimeChange = (e) => {
        let newState = this.props.day;

        newState.start_time = e.target.value;
        newState.updated = moment().format(this.state.dateFormat);
        this.setState({day: newState});
        this.saveFile();
    }

    endTimeChange = (e) => {
        let newState = this.props.day;

        newState.end_time = e.target.value;
        newState.updated = moment().format(this.state.dateFormat);
        this.setState({day: newState});
        this.saveFile();
    }

    render() {
        const { day } = this.props;

        if (this.state.renderChild)
        return (
            <div style={{background: this.state.color}}>
                <button type="submit" onClick={this.removeTimePanel.bind(this)}>DELETE</button><br/>
                Date: <input type="text" name="fname" onChange={this.dateChange} defaultValue={day.date}/><br/>
                Description: <input type="text" name="fname" onChange={this.descriptionChange} defaultValue={day.description}/><br/>
                Start Time: <input type="text" name="fname" onChange={this.startTimeChange} defaultValue={day.start_time}/><br/>
                End Time: <input type="text" name="fname" onChange={this.endTimeChange} defaultValue={day.end_time}/><br/>
                Is Time In Lieu: <input type="checkbox" name="vehicle1" value="Bike" onChange={this.toggleCheckboxChange} defaultChecked={day.is_time_in_lieu}/><br/>
                <small>Last Updated: {day.updated}</small>

                <br/><br/>
            </div>
        );
        return '';
    }
}

export default TimePanel;