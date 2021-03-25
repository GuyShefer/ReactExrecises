import React from 'react'
import storeData from './store'
import { Link } from 'react-router-dom'

export class Products extends React.Component {
    state = { data: [] }


    componentDidMount() {
        this.setState({ data: storeData })
    }


    render() {

        return <>
            { this.state.data.length === 0 ? <div>Loading</div> : this.state.data.map(product => {
                return <Link key={product.id} to={{ pathname: `/product/${product.id}` }}> {product.title} <br /></Link>;
            })}
        </>
    }
}