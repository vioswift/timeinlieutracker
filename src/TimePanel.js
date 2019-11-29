import React from 'react';
import File from './File';
import moment from 'moment';

class TimePanel extends React.Component {
    state = {
        color: "color-transparent",
        activeColor: "til",
        defaultColor: "color-transparent",
        renderChild: true,
        dateFormat: "MMMM Do YYYY, h:mm:ss A"
    };

    componentDidMount() {
        this.changeBackground(this.props.day.is_time_in_lieu);
    }

    saveFile() {
        this.props.setTotals();
        new File().saveFile(this.props.filePath, this.props.jsonData);
    }

    removeTimePanel() {
        this.props.removeTimePanel(this.props.day.id);
    }

    getTimeDifference() {
        var startTime = moment(this.props.day.start_time, 'H:mm A');
        var endTime = moment(this.props.day.end_time, 'H:mm A');
        let difference = endTime.diff(startTime)
        let duration = moment.duration(difference);
        let total = Math.floor(duration.asHours()) + " hrs, " + moment.utc(difference).format("m") + " mins";

        if (Number.isNaN(duration) ||  Number.isNaN(difference)) {
            return "Error";
        } else {
            return total;
        }
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
                {/* <tr style={{background: this.state.color}}> */}
                <tr className={this.state.color}>
                    <td className="noprint">
                        <button type="button" className="btn btn-danger" onClick={this.removeTimePanel.bind(this)}>X</button><br/>
                    </td>
                    <td>
                        <input className="form-control noprintborder" type="text" id="date-input" placeholder="YYYY-MM-DD" onChange={this.dateChange} defaultValue={day.date}/>
                        <small id="lastUpdated" className="form-text text-muted noprint"><strong>Last Updated:</strong> {day.updated}</small>
                    </td>
                    <td>
                        <input type="text" className="form-control noprintborder" id="text" placeholder="Enter a description" onChange={this.descriptionChange} defaultValue={day.description}/>
                    </td>
                    <td>
                        <input className="form-control noprintborder" type="text" id="startTime" placeholder="H:mm AM" onChange={this.startTimeChange} defaultValue={day.start_time}/>
                    </td>
                    <td>
                        <input className="form-control noprintborder" type="text" id="endTime" placeholder="H:mm AM" onChange={this.endTimeChange} defaultValue={day.end_time}/>
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