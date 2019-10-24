import React from 'react';
import TimePanel from './TimePanel';

class TimePanels extends React.Component {
    render() {
        const {
            json
        } = this.props;
        
        const timePanelMap = json.map(data =>
            data.days.map(days =>
                <div key={days.id}><TimePanel description={days.description} date={days.date} startTime={days.start_time} endTime={days.end_time} isTIL={days.is_time_in_lieu}/></div>
            )
        )
        
        return timePanelMap
    }
}

export default TimePanels;