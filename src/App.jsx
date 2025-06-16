import './App.css';
import axios from 'axios'
import {useState} from "react";
import map from "./assets/world_map.png"
import { getColorByRegion} from "./helpers/location.js";

function App() {

    const [countrys, setCountrys] = useState([])
    const [clicked, setClicked] = useState(false);


async function fetchData(){
        try {
            const countryData = await axios.get("https://restcountries.com/v3.1/all?fields=name,population,flags,region,cca3")
            console.log(countryData)
            setCountrys(countryData.data)
        }
        catch(e){
            console.error(e)
        }
}


    return (
        <>
            <img src={map} alt="map"/>
            <div className="buttonClick">
                {clicked ? <h3 className="h3Text"> World Regions </h3> : ''}
                <button className="countryButton" onClick={() => fetchData() && setClicked(true)} style={{display: clicked ? 'none' : 'inline-block'}}>Click here!</button></div>

            <ul className="countryList">
            {countrys.sort((a, b) => a.population - b.population).map((country) => {
                return <li key={country.cca3} className="list">
                    <img src={country.flags.png} alt="flag" className="flagss" width={50} />
                    <h2 style={{ color: getColorByRegion(country.region)}}>{country.name.common}</h2> {" "}
                    {`has a population of ${country.population} people` }

                </li>
            })}
            </ul>
        </>
    )
}

export default App
