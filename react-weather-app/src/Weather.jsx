import React from "react";
import "./Weather.css"

function Weather() {
    return(
        <div className="Weather">
            <form>
                <input type="search"/>
            </form>
            <h1>Lisbon</h1>
            <p>Wednesday 07:00</p>
            <p>Mostly cloudy</p>
            <div className="row">
                <div className="col-6>">
                  <p>🌤 6°C</p>  
                </div>
                <div className="col-6">
                    <p>Preception: 15%</p>
                    <p>Humidity: 72%</p>
                    <p>Wind: 13 km/h</p>

                </div>
            </div>
        </div>
    );
}

export default Weather