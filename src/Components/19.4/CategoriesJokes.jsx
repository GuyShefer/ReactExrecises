import React, { useState, useEffect } from 'react'
import axios from 'axios'

function CategoriesJokes() {
    const [categories, setCategories] = useState([]);
    const [jokeCategory, setJokeCategory] = useState('');

    useEffect(() => {
        (async () => {
            try {
                const data = await axios.get(`https://api.chucknorris.io/jokes/categories`);
                setCategories(data.data)
            } catch (err) {
                alert(err.message);
            }
        })()
    }, [])

    const getJokeByCategory = async (e) => {
        const category = e.target.value;
        console.log(category);
        const response = await axios.get(`https://api.chucknorris.io/jokes/random?category=${category}`);
        setJokeCategory(response.data.value);
    }

    return (<>
        <select name="categories" onChange={getJokeByCategory}>
            {categories.map(value => {
                return <option key={value} value={value}>{value}</option>
            })}
        </select>
        <p>{jokeCategory}</p>
    </>
    )
}

export default CategoriesJokes;
