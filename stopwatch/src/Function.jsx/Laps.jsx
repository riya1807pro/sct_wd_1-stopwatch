import React, { useState, useEffect } from 'react';
import Stopwatch from './Time';

const LapManager = () => {
  const [laps, setLaps] = useState([]);

    // Load laps from localStorage when the component mounts
      useEffect(() => {
          const savedLaps = JSON.parse(localStorage.getItem('laps')) || [];
              setLaps(savedLaps);
                }, []);

                  // Handle adding a lap
                    const handleAddLap = (lapTime) => {
                        const newLaps = [...laps, lapTime];
                            setLaps(newLaps);
                                localStorage.setItem('laps', JSON.stringify(newLaps));
                                  };

                                    // Handle deleting a lap
                                      const deleteLap = (index) => {
                                          const updatedLaps = laps.filter((_, i) => i !== index);
                                              setLaps(updatedLaps);
                                                  localStorage.setItem('laps', JSON.stringify(updatedLaps));
                                                    };

                                                      return (
                                                          <div>
                                                                      <Stopwatch onLap={handleAddLap} />

                                                                            <div className="lap-list">
                                                                                    <h2>Saved Laps:</h2>
                                                                                            {laps.length === 0 ? (
                                                                                                      <p>No laps saved yet.</p>
                                                                                                              ) : (
                                                                                                                        <ul>
                                                                                                                                    {laps.map((lap, index) => (
                                                                                                                                                  <li key={index}>
                                                                                                                                                                  <span>{lap}</span>
                                                                                                                                                                                  <button onClick={() => deleteLap(index)}>Delete</button>
                                                                                                                                                                                                </li>
                                                                                                                                                                                                            ))}
                                                                                                                                                                                                                      </ul>
                                                                                                                                                                                                                              )}
                                                                                                                                                                                                                                    </div>
                                                                                                                                                                                                                                        </div>
                                                                                                                                                                                                                                          );
                                                                                                                                                                                                                                          };

                                                                                                                                                                                                                                          export default LapManager;
