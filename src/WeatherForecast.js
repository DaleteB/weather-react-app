import axios from "axios";
import React from "react";
import "./WeatherForecast.css";


export default function WeatherForecast(props){

    function handleResponse(response){
        console.log(response.data)

    }

    let apiKey = "1dd026e455e89be339a51bb26f42cafe"
    let lat = props.coordinates.lat;
    let lon = props.coordinates.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    function icon(){
      let icon = props.data.weather[0].icon;
    return  `http://openweathermap.org/img/wn/${icon}@2x.png`;
    }
    
    return (
        <div className="WeatherForecast">
            <div className="row">
                <div className="col">
                    <div className="WeatherForecast-day">
                    Tue    
                    </div>
                    <img src={icon} alt="" className="day-icon " />
                    <div className="WeatherTemperatures">
                     <span className="WeatherForecast-temperature-max">19°</span>
                    <span className="WeatherForecast-temperature-min">10°</span>   
                    </div>
                    
                </div>

            </div>
        </div>
    );

}