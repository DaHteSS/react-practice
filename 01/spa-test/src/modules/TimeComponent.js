import React, { useState, useEffect } from 'react';

const TimeComponent = () => {
  const [time, setTime] = useState(new Date());

  useEffect (() => {
    const timeInterval = setInterval(() => {
      setTime(new Date(), 1000);
    })

    return () => clearInterval(timeInterval);
  })

  return (
    <h2>Сейчас {time.toLocaleTimeString()}.</h2>
  );
}

export default TimeComponent;