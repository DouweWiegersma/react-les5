import './App.css';
import axios from 'axios'
import {useState} from "react";
function App() {

    const [countrys, setCountrys] = useState([])



async function fetchData(){
        try {
            const countryData = await axios.get("https://restcountries.com/v3.1/all?fields=name,population,flags")
            console.log(countryData)
            setCountrys(countryData.data)
        }
        catch(e){
            console.error(e)
        }
    }



    return (
        <>

           <button className="countryButton" onClick={ () => fetchData()}>Click here!</button>
            <ul>
            {countrys.map((country) => {
                return <li key="name">
                    <img src={country.flags.png} alt="flag" className="flags"/>
                {country.name.common}q
                {country.population}
                </li>
            })}
            </ul>
        </>
    )
}

export default App
