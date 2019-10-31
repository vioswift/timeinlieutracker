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
                <tr>
                    <td>
                        <button type="button" className="btn btn-danger" onClick={this.removeTimePanel.bind(this)}>DELETE</button><br/>
                    </td>
                    <td>
                        <input className="form-control" type="date" id="example-date-input" onChange={this.dateChange} defaultValue={day.date}/>
                    </td>
                    <td>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter a description" onChange={this.descriptionChange} defaultValue={day.description}/>
                    </td>
                    <td>
                        <input className="form-control" type="time" id="example-time-input" onChange={this.startTimeChange} defaultValue={day.start_time}/>
                    </td>
                    <td>
                        <input className="form-control" type="time" id="example-time-input" onChange={this.endTimeChange} defaultValue={day.end_time}/>
                    </td>
                    <td>
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" onChange={this.toggleCheckboxChange} defaultChecked={day.is_time_in_lieu}/>
                    </td>
                    <td>
                        total
                    </td>
                </tr>
                {/* <tr>
                    <td>
                        <small id="emailHelp" className="form-text text-muted"><strong>Last Updated:</strong> {day.updated}</small>
                    </td>
                </tr> */}
            </div>
        );
        return '';
    }
}

export default TimePanel;