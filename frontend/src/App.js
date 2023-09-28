import { useState } from 'react';
import './App.css';

const api ={
  key: "cb1b2e237e27957ef01824910650eb99",
  base: "https://api.openweathermap.org/data/2.5/",
}

function App() {

  const [search, setSearch] = useState('');
  const [weather, setWeather] = useState('');

  


  const handleSearch = async () =>{
    let result = await fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`);
    let data =await  result.json();
    console.log(data);
    setWeather(data);
    console.log(weather)
  }

  const iconcode = weather ? weather.weather[0].icon : '#';

  return (
    <div className="App">
      <h1>Weather App</h1>
      <input type="text" 
      className='weatherInput'
      placeholder="Search..." 
      onChange = {(e) => setSearch(e.target.value)} 
      />
      <button className='weatherInput search-btn' onClick={handleSearch}>Search</button>
      
      {typeof weather.main !== "undefined" ? 
    
      (<div className='container'> 
      <p>
        {weather.name}
      </p>
      <p>{weather.main.temp} °C</p>
      {/* <p>{weather.weather[0].main}</p>  */}
      <img src={`http://openweathermap.org/img/w/${iconcode}.png`} alt="Weather icon" />
      <p className='weather-desc'>({weather.weather[0].description})</p> 
      </div>)
      : ("")}
    </div>
  );
}

export default App;
