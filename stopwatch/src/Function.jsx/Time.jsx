import React, { useState, useEffect } from 'react';

const Stopwatch = () => {
  const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);
      const [hours, setHours] = useState(0);
        const [isRunning, setIsRunning] = useState(false);

          useEffect(() => {
              let interval;

                  if (isRunning) {
                        interval = setInterval(() => {
                                setSeconds(prevSeconds => {
                                          if (prevSeconds === 59) {
                                                      setMinutes(prevMinutes => {
                                                                    if (prevMinutes === 59) {
                                                                                    setHours(prevHours => prevHours + 1);
                                                                                                    return 0;
                                                                                                                  }
                                                                                                                                return prevMinutes + 1;
                                                                                                                                            });
                                                                                                                                                        return 0;
                                                                                                                                                                  }
                                                                                                                                                                            return prevSeconds + 1;
                                                                                                                                                                                    });
                                                                                                                                                                                          }, 1000);
                                                                                                                                                                                              } else {
                                                                                                                                                                                                    clearInterval(interval);
                                                                                                                                                                                                        }

                                                                                                                                                                                                            return () => clearInterval(interval); // Clean up interval on component unmount
                                                                                                                                                                                                              }, [isRunning]);

                                                                                                                                                                                                                const handleStartStop = () => {
                                                                                                                                                                                                                    setIsRunning(prevState => !prevState);
                                                                                                                                                                                                                      };

                                                                                                                                                                                                                        const handleReset = () => {
                                                                                                                                                                                                                            setIsRunning(false);
                                                                                                                                                                                                                                setSeconds(0);
                                                                                                                                                                                                                                    setMinutes(0);
                                                                                                                                                                                                                                        setHours(0);
                                                                                                                                                                                                                                          };

                                                                                                                                                                                                                                            return (
                                                                                                                                                                                                                                                <div>
                                                                                                                                                                                                                                                      <div>
                                                                                                                                                                                                                                                              <h1>
                                                                                                                                                                                                                                                                        {String(hours).padStart(2, '0')}:
                                                                                                                                                                                                                                                                                  {String(minutes).padStart(2, '0')}:
                                                                                                                                                                                                                                                                                            {String(seconds).padStart(2, '0')}
                                                                                                                                                                                                                                                                                                    </h1>
                                                                                                                                                                                                                                                                                                          </div>
                                                                                                                                                                                                                                                                                                                <div>
                                                                                                                                                                                                                                                                                                                        <button onClick={handleStartStop}>
                                                                                                                                                                                                                                                                                                                                  {isRunning ? 'Stop' : 'Start'}
                                                                                                                                                                                                                                                                                                                                          </button>
                                                                                                                                                                                                                                                                                                                                                  <button onClick={handleReset}>Reset</button>
                                                                                                                                                                                                                                                                                                                                                        </div>
                                                                                                                                                                                                                                                                                                                                                            </div>
                                                                                                                                                                                                                                                                                                                                                              );
                                                                                                                                                                                                                                                                                                                                                              };

                                                                                                                                                                                                                                                                                                                                                              export default Stopwatch;
                                                                                                                                                                                                                                                                                                                                                              