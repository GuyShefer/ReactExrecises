import React from 'react'
import axios from 'axios'

export class CategoriesJokes extends React.Component {
    state = {categories : [], categoryJoke: ''}

    componentDidMount = async () => {
        const response = await axios.get('https://api.chucknorris.io/jokes/categories');
        this.setState({categories: response.data})
    }

    getJokeByCategory = async (e) => {
        const category = e.target.value
        const response = await axios.get(`https://api.chucknorris.io/jokes/random?category=${category}`);
        this.setState({categoryJoke : response.data.value})
    }

    render() {
        return <>
            <select name="categories" onChange={this.getJokeByCategory}>
                {this.state.categories.map(value => {
                    return <option key={value} value={value}>{value}</option>
                })}
            </select>
            <p>{this.state.categoryJoke}</p>
        </>
    }
}