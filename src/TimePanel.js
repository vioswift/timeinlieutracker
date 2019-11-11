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
            dateFormat: "MMMM Do YYYY, h:mm:ss A"
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

    getTimeDifference() {
        var startTime = moment(this.props.day.start_time, 'HH:mm');
        var endTime = moment(this.props.day.end_time, 'HH:mm');
        let difference = endTime.diff(startTime)
        let duration = moment.duration(difference);

        return Math.floor(duration.asHours()) + moment.utc(difference).format(":mm");
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
            <>
                <tr style={{background: this.state.color}}>
                    <td>
                        <button type="button" className="btn btn-danger" onClick={this.removeTimePanel.bind(this)}>DELETE</button><br/>
                    </td>
                    <td>
                        <input className="form-control" type="date" id="example-date-input" onChange={this.dateChange} defaultValue={day.date}/>
                        <small id="lastUpdated" className="form-text text-muted"><strong>Last Updated:</strong> {day.updated}</small>
                    </td>
                    <td>
                        <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter a description" onChange={this.descriptionChange} defaultValue={day.description}/>
                    </td>
                    <td>
                        <input className="form-control" type="time" id="startTime" onChange={this.startTimeChange} defaultValue={day.start_time}/>
                    </td>
                    <td>
                        <input className="form-control" type="time" id="endTime" onChange={this.endTimeChange} defaultValue={day.end_time}/>
                    </td>
                    <td>
                        <div className="custom-control custom-switch">
                            <input type="checkbox" className="custom-control-input" id={this.props.day.id} onChange={this.toggleCheckboxChange} defaultChecked={day.is_time_in_lieu}/>
                            <label className="custom-control-label" htmlFor={this.props.day.id}></label>
                        </div>
                    </td>
                    <td>
                        {this.getTimeDifference()}
                    </td>
                </tr>
            </>
        );
        return '';
    }
}

export default TimePanel;