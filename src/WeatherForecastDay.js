import React from "react";



export default function WeatherForecastDay(props){
    function maxTemperature(){
        let temperature = Math.round(props.data.temp.max);
        return `${temperature}°`;
    }

    function minTemperature(){
        let temperature = Math.round(props.data.temp.min);
        return `${temperature}°`;
    }

    function day(){
        let date = new Date(props.data.dt * 1000);
        let day = date.getDay();

        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ];

        return days[day];
    }

    function icon(){
        let icon = props.data.weather[0].icon;
      return  `https://openweathermap.org/img/wn/${icon}@2x.png`;
      }

    return (
        <div>
        <div className="WeatherForecast-day fw-bold">
                    {day()}    
                    </div>
                    <img src={icon()} alt="" className="day-icon" id="icon-day"/>
                    <div className="WeatherTemperatures">
                     <span className="WeatherForecast-temperature-max">{maxTemperature()}</span>
                    <span className="WeatherForecast-temperature-min">{minTemperature()}</span>   
                    </div>
        </div>
        
    );
}