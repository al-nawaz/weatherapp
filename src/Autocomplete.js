import React, { useEffect, useState } from "react";


const Autocomplete = () =>{

    const [city1,setCity1] = useState('');
    const [search1,setSearch1] =useState('');

useEffect(()=>{
    const fetchApi = async () =>{
        const url1 =`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=%09WdTsgnZ0ReVJ23UhCJGuUgIxxYAdEP4l&q=${search1}`
        const response1 = await fetch(url1);
        const resJson1 = await response1.json();
        console.log(resJson1)
        setCity1(resJson1)
    }
    fetchApi()
},[search1])

    return(
        <div className="main">
                <input type='search' placeholder="Search City"
                 onChange={(event)=>{setSearch1(event.target.value)}}
                />
                {!city1 ? <h1>No City Found</h1> :
                <>
                <ul>{city1.map(x=><li>{x.LocalizedName}</li>)}</ul>
                </>
                }
        </div>
    )
}

export default Autocomplete;