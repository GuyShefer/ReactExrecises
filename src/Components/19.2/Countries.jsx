import React, { useState, useEffect } from 'react'
import axios from 'axios'

function Countries() {

    const [countriesList, setcountriesList] = useState([]);
    const [userInput, setInput] = useState('');

    useEffect(() => {
        (async () => {
            const data = await axios.get('https://restcountries.eu/rest/v2/all');
            console.log(data.data);
            setcountriesList(data.data)
        })()
    }, [])

    const filterCountries = (e) => {
        const input = e.target.value;
        setInput(input);
    }

    return (
        <>
            <label htmlFor="search">Search</label>
            <input type="text" name="search" onChange={filterCountries} />
            {countriesList ?
                <ul>
                    {countriesList.filter(country => country.name.startsWith(userInput)).map(country => {
                        return <li>{country.name}</li>
                    })}
                </ul>
                : ''}
        </>
    )
}

export default Countries;