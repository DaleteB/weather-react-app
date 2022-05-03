import axios from "axios";
import React, {useState} from "react";
import "./WeatherForecast.css";
import WeatherForecastDay from "./WeatherForecastDay";


export default function WeatherForecast(props){
let [loaded, setLoaded] = useState(false);
let [forecast, setForecast] =useState(null);

    function handleResponse(response){
        setForecast(response.data.daily);
        setLoaded(true);

    }

    

    if(loaded){
        return(
        <div className="WeatherForecast">
            <div className="row">
                <div className="col">
                    <WeatherForecastDay data={forecast[0]}/>
                    
                </div>

            </div>
        </div>    
        )
     
    
    }else{
       
        let apiKey = "1dd026e455e89be339a51bb26f42cafe";
        let lat = props.coordinates.lat;
        let lon = props.coordinates.lon;
        let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);
        return null;


        
     
    }
    

}