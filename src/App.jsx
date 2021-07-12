import React, { useState } from "react";
import ClickTimes from "./ClickTimes";
import TimestampsDisplay from "./TimestampsDisplay";

function App() {
  const [timestamps, setTimestamps] = useState([]);
  return (
    <div>
      <ClickTimes timestamps = {timestamps} setTimestamps = {setTimestamps} />
      <TimestampsDisplay timestamps={timestamps} />
    </div>
  );
}

export default App;
