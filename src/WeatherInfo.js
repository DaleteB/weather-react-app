import React from "react";
import FormattedDate from "./FormattedDate";
import Weathertemperature from "./WeatherTemperature";

import "./WeatherInfo.css";

export default function WeatherInfo(props){
    return (
        <div className="WeatherInfo">
            <h1>{props.data.city}</h1>
            <ul>
                <li>
                    <FormattedDate date={props.data.date}/>
                </li>
                <li className="text-capitalize">
                   {props.data.description}
                </li>
            </ul>
            <div className="row">
                <div className="col-6">
                  <div className="clearfix">
                    <div className="float-left icon">
                    <img src={props.data.icon} alt={props.data.description} className="float-left " />
                    </div>
                  <div className="float-left temperature-icon">
                      <Weathertemperature celsius={props.data.temperature} />
                  </div>
                  </div>
                </div>
                <div className="col-6 info">
                    <ul> 
                        <li>
                        Humidity: {props.data.humidity}%
                        </li>
                        
                        <li>  Wind: {props.data.wind} km/h</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}