import React from 'react';
import TimePanel from './TimePanel';

class TimePanels extends React.Component {
    render() {
        const { json, filePath } = this.props;
        const timePanelMap = json.map(data =>
            data.days.map(day =>
                <div key={day.id}>
                    <TimePanel day={day} filePath={filePath} jsonData={json}/>
                </div>
            )
        )
        
        return timePanelMap
    }
}

export default TimePanels;