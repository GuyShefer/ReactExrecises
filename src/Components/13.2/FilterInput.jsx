import React from 'react'

export class FilterInput extends React.Component {
    state = {filterInput : ''}

    getInput = (e) => {
        this.setState({filterInput : e.target.value})
    }

    filterAvatars = () => {
        // console.log(this.state.filterInput);
        this.props.filterFunc(this.state.filterInput);
    }

    render() {
        return <>
        <label htmlFor="name">Filter by Name: </label>
            <input type="text" className="filter-input" onChange={this.getInput}/>
            <br></br>
            <input className="filter-btn" type="button" value="Filter" onClick={this.filterAvatars}/>
        </>
    }
}