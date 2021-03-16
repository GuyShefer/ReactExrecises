import React from 'react';

export class LifeCycle extends React.Component {
    state = { favoriteColor: 'green' };

    componentDidMount() {
        setTimeout(() => {
            console.log('[componentDidMount]');
            this.setState({favoriteColor: 'white'})
        }, 1000);
    }

    componentDidUpdate(){
        const div = document.querySelector('#attribute');
        div.innerHTML += `The updated favorite color is: ${this.state.favoriteColor}`
    }

    render() {
        return (
            <div>
                <h1>My favorite color is {this.state.favoriteColor}</h1>
                <div id="attribute"></div>
            </div>
        )
    }

}


