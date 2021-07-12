import React, {useState} from "react";

function ClickTimes({timestamps, setTimestamps}) {
    const handleClick = () => {
        setTimestamps([...timestamps, Date.now()]);
    }
    return (
        <button onClick={() => handleClick()}>Click for Current Time </button>
    );
}



export default ClickTimes;
