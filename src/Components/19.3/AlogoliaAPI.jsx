import React, { useState, useEffect } from 'react'
import axios from 'axios'

function AlogoliaAPI() {

    const [algoliaData, setAlgoliaData] = useState([]);
    const [userInput, setInput] = useState('');
    const [search, setSearch] = useState('');

    useEffect(() => {
        (async () => {
            const data = await axios.get(`https://hn.algolia.com/api/v1/search?query=${userInput}`);
            setAlgoliaData(data.data.hits)
        })()
    }, [search])

    const inputHandler = (e) =>{
        setInput(e.target.value);
    }

    const handleClickSearch = (e) => {
        setSearch(userInput)
    }

    return (
        <>
        <label htmlFor="search">Search</label>
        <input type="text" name="search" onChange={inputHandler}/>
        <input type="button" value="Search" onClick={handleClickSearch}/>
            {algoliaData.map(data => {
                return <div> <a href="data.url">{data.title}</a></div>
            })}
        </>
    )
}

export default AlogoliaAPI;