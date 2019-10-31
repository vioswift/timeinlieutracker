import React from 'react';
import TimePanel from './TimePanel';
import File from './File';
import moment from 'moment';

class TimePanels extends React.Component {
    getHighestId(array) {
        var highestId = 0;

        for(var count = 0; count < array.length; count++){ 
            if (highestId < array[count].id) {
                highestId = array[count].id;
            }
        }

        return highestId;
    }

    addTimePanel(){
        let newState = this.props.json;
        let days = newState[0].days;
    
        days.push(            
        {
            id: this.getHighestId(days) + 1,
            date: "00/00/0000",
            description: "new",
            start_time: "00:00 AM",
            end_time: "00:00 AM",
            is_time_in_lieu: true,
            updated: moment().format('MMMM Do YYYY, h:mm:ss a')
        });
        
        this.setState({json: newState});
        new File().saveFile(this.props.filePath, this.props.json);
    }

    removeTimePanel(id) {
        let newState = this.props.json;
        let dayId = id;
        let days = newState[0].days;

        for(var count = 0; count < days.length; count++){ 
            if (days[count].id === dayId) {
                days.splice(count, 1); 
            }
        }

        this.setState({json: newState});
        new File().saveFile(this.props.filePath, this.props.json);
    }

    render() {
        const { json, filePath } = this.props;
        const timePanelMap = json.map(data =>
            data.days.map(day =>
                <div key={day.id}>
                    <TimePanel 
                        day={day} 
                        filePath={filePath} 
                        jsonData={json}
                        removeTimePanel={id => {
                            this.removeTimePanel(id);
                        }}
                    />
                </div>
            )
        )

        return (
            <div>
                <table className="table table-bordered table-striped table-highlight">
                    <thead className="row">
                        <th>
                            <strong>DELETE</strong> 
                        </th>
                        <th>
                            <strong>Date</strong>
                        </th>
                        <th>
                            <strong>Description</strong>
                        </th>
                        <th>
                            <strong>Start Time</strong>
                        </th>
                        <th>
                            <strong>End Time</strong>
                        </th>
                        <th>
                            <strong>Is Time In Lieu</strong>
                        </th>
                        <th>
                            <strong>TOTAL</strong>
                        </th>
                    </thead>
                    <tbody>
                        {timePanelMap}
                    </tbody>
                </table>
                <button type="button" className="btn btn-success" onClick={this.addTimePanel.bind(this)}>Add Panel</button>
            </div>
        );
    }
}

export default TimePanels;