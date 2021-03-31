import React, { useState, useEffect } from 'react'
import axios from 'axios'

function Info() {

    const [joke, setJoke] = useState('');

    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();

    useEffect(() => {
        (async () => {
            const newJoke = await axios.get('https://swapi.dev/api/films/1/', { cancelToken: source.token });
            setJoke(newJoke.data.title);
        })()
    }, [])


    return (
        <>
            <p>{joke}</p>
        </>
    )

}

export default Info;