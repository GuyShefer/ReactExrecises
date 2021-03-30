import React, { useState, useEffect } from 'react'
import axios from 'axios'

function SimpleFetch() {

    const [movie, setMovie] = useState(null);

    useEffect(() => {
        (async () => {
            const data = await axios.get('https://swapi.dev/api/films/1/');
            console.log(data.data);
            setMovie(data.data)
        })()

    }, [])

    return (
        <>
            { movie ?
                <div>
                    <p>{movie.title}</p>
                    <p>{movie.director}</p>
                </div>
                : ''
            }

        </>
    )
}

export default SimpleFetch;