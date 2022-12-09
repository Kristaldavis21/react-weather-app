import React, { useState } from 'react';
import axios from 'axios';
import "./index.css";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState('');

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=71edbb6e762d9d083ab62b4933f3b2ba`;

  const searchLocation = (
    (event) => 
    {
    if (event.key === 'Enter') {
      axios.get(url).then(
        (response) => {
        setData(response.data)
        console.log(response.data)
      })
      setLocation('');
    };
  })

    return (
      <div className="app">
        <div className="search">
          <div>
            <input
              value={location}
              onChange={event => setLocation(event.target.value)}
              onKeyPress={searchLocation}
              placeholder='Enter Location'
              type="text" />
          </div>
        </div>

        <div className="container">
          <div className="top">
            <div className="location">
              <p>{data.name}</p>
            </div>
            <div className="temp">
              {data.main ? <h1>{data.main.temp} °F</h1> : null}
            </div>
            {/* <div className="description">
              {data.weather ? <p>{data.weather[0].main}</p> : null}
              <p>Clouds</p>
            </div> */}
          </div>

          <div className="bottom">
            <div className="feels">
              {data.main ? <p className='bold'>{data.main.feels_like}°F </p> : null}
              <p>Feels Like</p>
            </div>
            <div className="humidity">
              {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
              <p className='bold'>20%</p>
            </div>

            <div className="wind">
              {data.wind ? <p className='bold'> {data.wind.speed} MPH </p> : null} 

              12MPH
            </div>
          </div>

        </div>
      </div>
    );
  }

export default App;