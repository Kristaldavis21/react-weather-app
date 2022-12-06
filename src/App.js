import React, {useState} from 'react';
import axios from 'axios';

function App()  {
const url = `https://api.openweathermap.org/data/2.5/weather?q=bali&appid=71edbb6e762d9d083ab62b4933f3b2ba`

  return (
    <div className ="App">
      <div className="container">
        <div className="top">
      <div className="location">
      <p> Bali</p>
      </div>
      </div>
      <div className="temp">
        <h2>60</h2>
        </div>
        <div className="weather description">
        <p>cloudy</p>
        </div>
        <div className="bottom">
        <div className="feels">
          <p> 65f</p>
        </div>
        <div className="hummidity">
          <p> 40%</p>
        </div>
        <div className="wind">
        <p> 21%</p>
</div>
</div>
</div>
</div>
  );
}

export default App;
