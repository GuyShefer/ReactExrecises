import React from 'react'
import './DataMassaging.css'

export class UserCard extends React.Component {
    state = {user: this.props.user}

    render() {
        return <>
            <div className="user-card">
                <h2>Name : {this.state.user.name}</h2>
                <h3>Birthday : {this.state.user.birthday}</h3>
                <h3>Favorite Meats: {this.state.user.favoriteFoods.meats.join(', ')}</h3>
                <h3>Favorite Fises: {this.state.user.favoriteFoods.fish.join(', ')}</h3>
            </div>
        </>
    }
}