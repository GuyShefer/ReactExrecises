import React, { useState } from 'react'
import axios from 'axios'

function OneJoke() {

    const [joke, setJoke] = useState('');


    const getNewJoke = () => {
        (async () => {
            const newJoke = await axios.get('https://api.chucknorris.io/jokes/random');
            setJoke(newJoke.data.value);
        })()
    }

    return (
        <>
            <input type="button" value="Get New Joke" onClick={getNewJoke} />
            <p> {joke} </p>
        </>
    )
}

export default OneJoke;