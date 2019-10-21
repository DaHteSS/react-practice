import React, {useState, useEffect} from 'react';

const TimeComponent = props => {
  const [time, setTime] = useState(new Date());

  useEffect (() => {
    const timeInterval = setInterval(() => {
      setTime(new Date(), 1000);
    })

    return () => clearInterval(timeInterval);
  })

  return (
    <div>
      <h2>Сейчас {time.toLocaleTimeString()}.</h2>
    </div>
  );
}

export default TimeComponent;