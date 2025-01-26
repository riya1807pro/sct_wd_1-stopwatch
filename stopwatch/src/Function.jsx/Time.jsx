import React, { useState, useEffect } from 'react';

const Stopwatch = ({ onLap }) => {
  const [isRunning, setIsRunning] = useState(false); // Track whether stopwatch is running
    const [time, setTime] = useState(0); // Time in seconds
      const [intervalId, setIntervalId] = useState(null); // Interval ID to clear it later

        // Convert time in seconds to hh:mm:ss format
          const formatTime = (timeInSeconds) => {
              const hours = Math.floor(timeInSeconds / 3600);
                  const minutes = Math.floor((timeInSeconds % 3600) / 60);
                      const seconds = timeInSeconds % 60;
                          return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
                            };

                              // Start/Stop the stopwatch
                                const toggleStopwatch = () => {
                                    if (isRunning) {
                                          clearInterval(intervalId);
                                                setIsRunning(false);
                                                    } else {
                                                          const id = setInterval(() => {
                                                                  setTime((prevTime) => prevTime + 1); // Increment time by 1 second
                                                                        }, 1000);
                                                                              setIntervalId(id);
                                                                                    setIsRunning(true);
                                                                                        }
                                                                                          };

                                                                                            // Stop and reset the stopwatch
                                                                                              const resetStopwatch = () => {
                                                                                                  setTime(0);
                                                                                                      if (isRunning) {
                                                                                                            clearInterval(intervalId);
                                                                                                                  setIsRunning(false);
                                                                                                                      }
                                                                                                                        };

                                                                                                                          // Add lap (send the current time to the parent component)
                                                                                                                            const addLap = () => {
                                                                                                                                if (isRunning) {
                                                                                                                                      onLap(formatTime(time)); // Pass formatted time to the parent component
                                                                                                                                          }
                                                                                                                                            };

                                                                                                                                              useEffect(() => {
                                                                                                                                                  // Cleanup interval on component unmount
                                                                                                                                                      return () => {
                                                                                                                                                            if (intervalId) {
                                                                                                                                                                    clearInterval(intervalId);
                                                                                                                                                                          }
                                                                                                                                                                              };
                                                                                                                                                                                }, [intervalId]);

                                                                                                                                                                                  return (
                                                                                                                                                                                      <div>
                                                                                                                                                                                            <h2>Stopwatch</h2>
                                                                                                                                                                                                  <div className='time' >{formatTime(time)}</div>
                                                                                                                                                                                                        <button onClick={toggleStopwatch}>{isRunning ? 'Stop' : 'Start'}</button>
                                                                                                                                                                                                              <button onClick={resetStopwatch}>Reset</button>
                                                                                                                                                                                                                    <button onClick={addLap} disabled={!isRunning}>
                                                                                                                                                                                                                            Add Lap
                                                                                                                                                                                                                                  </button>
                                                                                                                                                                                                                                      </div>
                                                                                                                                                                                                                                        );
                                                                                                                                                                                                                                        };

                                                                                                                                                                                                                                        export default Stopwatch;
