import React from 'react';
import TimePanel from './TimePanel';
import File from './File';
import moment from 'moment';
import Print from './Print';

class TimePanels extends React.Component {
    state = {
        total_til: 0,
        total_overtime: 0,
        total_balance: 0
    }

    componentDidMount() {
        this.setTotals();
    }

    validateNumber(number) {
        if (Number.isNaN(number)) {
            return 0;
        } else {
            return number;
        }
    }

    getTotal(difference) {
        return Math.trunc(moment.duration(difference).asHours()) + " hrs, " +  moment.duration(difference).minutes() + " mins";
    }

    getTimeDifference(_startTime, _endTime) {
        var startTime = moment(_startTime, 'HH:mm');
        var endTime = moment(_endTime, 'HH:mm');
        let difference = endTime.diff(startTime);

        return difference;
    }

    getTotal_isTIL(isTIL) {
        var total = 0;
        let newState = this.props.json;
        let days = newState[0].days;

        for(var count = 0; count < days.length; count++){ 
            if (days[count].is_time_in_lieu === isTIL) {
                total += this.getTimeDifference(days[count].start_time, days[count].end_time);
            }
        }

        return this.validateNumber(total);
    }

    getTotal_balance() {
        let totalBalance = this.getTotal_isTIL(false) - this.getTotal_isTIL(true);
        return this.validateNumber(totalBalance);
    }

    setTotals() {
        this.setState({
            total_til: this.getTotal(this.getTotal_isTIL(true)),
            total_overtime: this.getTotal(this.getTotal_isTIL(false)),
            total_balance: this.getTotal(this.getTotal_balance())
        });
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

    addTimePanel() {
        let newState = this.props.json;
        let days = newState[0].days;
    
        days.push(            
        {
            id: this.getHighestId(days) + 1,
            date: moment().format('YYYY-MM-DD'),
            description: "",
            start_time: moment().format('hh:mm'),
            end_time: moment().format('hh:mm'),
            is_time_in_lieu: false,
            updated: moment().format('MMMM Do YYYY, h:mm:ss A')
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
                <TimePanel 
                    key={day.id}
                    day={day} 
                    filePath={filePath} 
                    jsonData={json}
                    removeTimePanel={id => {
                        this.removeTimePanel(id);
                    }}
                    setTotals={() => {
                        this.setTotals();
                    }}
                />
            )
        )
        const addPanelButton = <button type="button" className="btn btn-success" onClick={this.addTimePanel.bind(this)}>Add Panel</button>;

        return (
            <div>
                <table className="table table-bordered table-highlight">
                    <thead>
                        <tr className="grey-bg">
                            <th className="noprint">
                                <strong>DELETE</strong> 
                            </th>
                            <th>
                                <strong>Date</strong> <small>(YYYY-MM-DD)</small>
                            </th>
                            <th>
                                <strong>Description</strong>
                            </th>
                            <th>
                                <strong>Start Time</strong> <small className="noprint">(H:mm AM/PM)</small>
                            </th>
                            <th>
                                <strong>End Time</strong> <small className="noprint">(H:mm AM/PM)</small>
                            </th>
                            <th>
                                <strong>Is TIL</strong>
                            </th>
                            <th>
                                <strong>TOTAL</strong>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {timePanelMap}
                    </tbody>
                </table>

                <table className="total-table table-bordered">
                    <tbody>
                        <tr>
                            <td className="til"><strong>Time In Lieu</strong></td>
                            <td>{filePath ? this.state.total_til : ''}</td>
                        </tr>
                        <tr>
                            <td className=""><strong>Overtime</strong></td>
                            <td>{filePath ? this.state.total_overtime : ''}</td>
                        </tr>
                        <tr>
                            <td className="grey-bg"><strong>BALANCE</strong></td>
                            <td>{filePath ? this.state.total_balance : ''}</td>
                        </tr>
                    </tbody>
                </table>

                <div className="btn-group noprint">
                    {filePath ? addPanelButton : ''}
                    <Print/>
                </div>
            </div>
        );
    }
}

export default TimePanels;