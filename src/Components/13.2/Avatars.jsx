import React from 'react'
import axios from 'axios'
import { SingleAvatar } from './SingleAvatar';
import './Avatars.css'
import { FilterInput } from './FilterInput';

export class Avatars extends React.Component {
    state = { avatarsArr: [], avatarsArrTemp: []}


    componentDidMount = async () => {
        const response = await axios.get('https://randomuser.me/api/?results=10');
        const filteredAvatars = response.data.results.map(avatar => {
            return { name: `${avatar.name.first} ${avatar.name.last}`, picture: avatar.picture.medium }
        })
        this.setState({ avatarsArr: filteredAvatars, avatarsArrTemp:  filteredAvatars})
    }

    filterAvatarsArr = (input) => {
        const tempAvatarsArr = this.state.avatarsArrTemp.filter(avatar => avatar.name.includes(input))
        this.setState({avatarsArr: tempAvatarsArr})
    }

    render() {
        console.log(this.state);
        return <>
            <FilterInput filterFunc={this.filterAvatarsArr}/>

            <div className="users-container">
                {
                    this.state.avatarsArr.map(avatar => <SingleAvatar key={avatar.name} avatar={avatar} />)
                }
            </div>
        </>
    }
}