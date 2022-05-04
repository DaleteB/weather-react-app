import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import "./Weather.css";
import WeatherForecast from "./WeatherForecast";

export default function weather(props){
    const [weatherData, setWeatherData] =useState({ready: false});
    const [city, setCity] = useState(props.defaultCity);
    function handleResponse(response){
      setWeatherData({
        ready: true,
        coordinates: response.data.coord,
       temperature: Math.round(response.data.main.temp),
       wind: Math.round(response.data.wind.speed),
       city: response.data.name,
       humidity: response.data.main.humidity, 
       icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
       description: response.data.weather[0].description, 
        date: new Date(response.data.dt * 1000),
      }
      )

    }

    function search(){
        const apiKey = "2ddd47ccd8fb738ffa299ef3a36e7e5a";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        axios.get(apiUrl).then(handleResponse);
    }

    function handleSubmit(event){
        event.preventDefault();
        search();
    }

    function handleCityChange(event){
        setCity(event.target.value)
    }

    if(weatherData.ready){
        return(
            <div className="Weather">
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-9">
                        <input type="search" placeholder="Enter a city..." className="form-control search-bar" autoFocus="on" onChange={handleCityChange}/>
                    </div>
                    <div className="col-3">
                        <input type="submit" value="Search" className=" btn-search  w-100" />
                    </div>
                </div>
            </form>
            <WeatherInfo data={weatherData}/>
            <div className="following-days">Forecast for the following days:</div>
            <hr />
            <WeatherForecast coordinates={weatherData.coordinates}/>
            
        </div>
    )
    
    } else {
     search();
    return "Loading..."
    
    }

    
    
    
    
        
}