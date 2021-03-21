import React from 'react'
import axios from 'axios'

export class OneJoke extends React.Component {
    state = { joke: '' }

    getNewJoke = async () => {
        let newJoke = await axios.get('https://api.chucknorris.io/jokes/random')

        this.setState({ joke: newJoke.data.value });
    }

    render() {
        return <>
            <input type="button" value="Get New Joke" onClick={this.getNewJoke} />
            <p> {this.state.joke} </p>
        </>
    }
}