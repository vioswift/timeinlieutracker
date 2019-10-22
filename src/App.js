import React from 'react';
import './App.css';
import FileDialogue from './FileDialogue';
import TimePanel from './TimePanel';

function App() {
  const timePanels = [{id: 1, panel: <TimePanel description="des1" date="00/00/0000" startTime="00:00 AM" endTime="00:00 AM" isTIL={true}/>}];

  const timePanelMap = timePanels.map(timePanel =>
    <div key={timePanel.id}>{timePanel.panel}</div>
  );

  function someMethod() {
    console.log('bar');
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>TimeInLieuTracker</h1>
        {/* <p>File Version: {FileDialogue.state.jsonFile.settings.show_signatures}</p> */}
        <FileDialogue parentMethod={someMethod} />
        {/* <TimePanel/> */}
        
        {timePanelMap}

      </header>
    </div>
  );
}

export default App;
