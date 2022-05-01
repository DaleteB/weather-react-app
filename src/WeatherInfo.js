import React from "react";
import FormattedDate from "./FormattedDate";
import Weathertemperature from "./WeatherTemperature";

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
                    <div className="float-left">
                    <img src={props.data.icon} alt={props.data.description} className="float-left"/>
                    </div>
                  <div className="float-left">
                      <Weathertemperature celsius={props.data.temperature} />
                  </div>
                  </div>
                </div>
                <div className="col-6">
                    <ul>
                        <li>
                            Humidity: {props.data.humidity}%
                        </li>
                        <li>Wind: {props.data.wind} km/h</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}