import React, { useEffect, useState } from "react";
import './weather.css'


const Weather = () =>{

    const [city,setCity] = useState('Pune');
    const [search,setSearch] =useState('Mumbai');

useEffect(()=>{
    const fetchApi = async () =>{
        const url =`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=fd7af57c6b67499cd06e452d20e755f2`
        const response = await fetch(url);
        const resJson = await response.json();
        console.log(resJson)
        setCity(resJson.main)
    }
    fetchApi()
},[search])

    return(
        <div className="main">
            <div className="temp">
                <input type='search' placeholder="Search City"
                 onChange={(event)=>{setSearch(event.target.value)}}
                />
                <h1></h1>
            </div>
        
            {!city ? <h1>No Data Found</h1>:
            <div className="misc">
                <h1>{search}</h1>
                <h1>{city.temp}<sup>.</sup>C</h1>
                <h2></h2>
            </div>}
        </div>
    )
}

export default Weather;