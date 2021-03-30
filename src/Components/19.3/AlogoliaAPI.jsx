import React, { useState, useEffect } from 'react'
import axios from 'axios'

function AlogoliaAPI() {

    const [algoliaData, setAlgoliaData] = useState([]);
    const [userInput, setInput] = useState('');
    const [search, setSearch] = useState('');
    const [loader, setLoader] = useState(true)

    useEffect(() => {
        (async () => {
            try {
                const data = await axios.get(`https://hn.algolia.com/api/v1/search?query=${userInput}`);
                if (data) {
                    setLoader(false);
                }
                setAlgoliaData(data.data.hits)
            } catch (err) {
                alert(err.message);
            }
        })()
    }, [search])

    const inputHandler = (e) => {
        setInput(e.target.value);
    }

    const handleClickSearch = (e) => {
        setLoader(true);
        setSearch(userInput)
    }

    return (
        <>
            <label htmlFor="search">Search</label>
            <input type="text" name="search" onChange={inputHandler} />
            <input type="button" value="Search" onClick={handleClickSearch} />
            {loader ? <p>Loading...</p> : ''}
            {algoliaData.map(data => {
                return <div key={data.objectID}> <a href={data.url}>{data.title}</a></div>
            })}
        </>
    )
}

export default AlogoliaAPI;