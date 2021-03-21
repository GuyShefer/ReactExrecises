import React from 'react'

export class NameDisplay extends React.Component {
    state = {name : this.props.name}

    render() {
        return <>
            {
                console.log(this.state.name)
            }
        </>
    }
}