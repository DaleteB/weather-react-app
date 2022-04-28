import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function weather(props){
    const [weatherData, setWeatherData] =useState({ready: false});

    function handleResponse(response){
      setWeatherData({
        ready: true,
       temperature: Math.round(response.data.main.temp),
       wind: response.data.wind,
       city: response.data.name,
       humidity: response.data.main.humidity, 
       iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
       description: response.data.weather[0].description, 
        date: "Wednesday 15:51",
      }
      )

    }

    if(weatherData.ready){
        return(
            <div className="Weather">
            <form>
                <div className="row">
                    <div className="col-9">
                        <input type="search" placeholder="Enter a city..." className="form-control" autoFocus="on"/>
                    </div>
                    <div className="col-3">
                        <input type="submit" value="Search" className="btn btn-primary w-100" />
                    </div>
                </div>
            </form>
            <h1>{weatherData.city}</h1>
            <ul>
                <li>
                    {weatherData.date}
                </li>
                <li className="text-capitalize">
                   {weatherData.description}
                </li>
            </ul>
            <div className="row">
                <div className="col-6">
                  <div className="clearfix">
                    <img src={weatherData.iconUrl} alt={weatherData.description} className="float-left"/>
                  </div>
                  <div className="float-left">
                   <span className="temperature">{weatherData.temperature}</span>
                    <span className="unit">°C</span> 
                  </div>
                </div>
                <div className="col-6">
                    <ul>
                        <li>
                            Humidity: {weatherData.humidity}%
                        </li>
                        <li>Wind: {weatherData.wind} km/h</li>
                    </ul>
                </div>
            </div>
        </div>
    )
    
    } else {
     const apiKey = "1dd026e455e89be339a51bb26f42cafe";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`
    axios.get(apiUrl).then(handleResponse);
    return "Loading..."
    
    }

    
    
    
    
        
}