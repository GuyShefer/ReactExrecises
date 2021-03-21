import React from 'react'
import dataArr from './dataArr'
import { NameDisplay } from './NameDisplay'
import { UserCard } from './UserCard'

export class DataMassaging extends React.Component {
    state = { data: dataArr }

    getNames = () => {
        return this.state.data.map(user => user.name)
    }

    getAllBornBefore1990 = () => {
        return this.state.data.filter(user => Number(user.birthday.slice(-4)) < 1990);
    }

    utilities = () => {
        console.log(this.getNames());
        const arr = this.getAllBornBefore1990()
        console.log(arr);
        this.setState = ({data: arr});
    }



    render() {

        this.utilities()

        return <>
        {
            this.getNames().map(name  => {
                return <NameDisplay key={name} name={name}/>
            }),

            this.getAllBornBefore1990().map(user => {
                return <UserCard user={user}/>
            })
        }

        </>
    }
}