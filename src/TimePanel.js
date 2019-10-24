import React from 'react';

class TimePanel extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            color: "transparent",
            activeColor: "#CCCC00",
            defaultColor: "transparent"
        };
    }

    componentDidMount() {
        this.setState(this.props.isTIL? {color: this.state.activeColor} : {color: this.state.defaultColor});
    }

    toggleCheckboxChange = (e) => {
        this.setState(e.target.checked ? {color: this.state.activeColor} : {color: this.state.defaultColor});
    }

    render() {
        const {
            description,
            date,
            startTime,
            endTime,
            isTIL
        } = this.props;

        return (
            <div style={{background: this.state.color}}>
                <button type="submit">DELETE</button><br/>
                Date: <input type="text" name="fname" defaultValue={date}/><br/>
                Description: <input type="text" name="fname" defaultValue={description}/><br/>
                Start Time: <input type="text" name="fname" defaultValue={startTime}/><br/>
                End Time: <input type="text" name="fname" defaultValue={endTime}/><br/>
                Is Time In Lieu: <input type="checkbox" name="vehicle1" value="Bike" onChange={this.toggleCheckboxChange} defaultChecked={isTIL}/>

                <br/><br/>
            </div>
        );
    }
}

export default TimePanel;