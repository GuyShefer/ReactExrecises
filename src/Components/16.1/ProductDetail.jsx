import React from 'react'
import storeData from './store'
import { Link } from 'react-router-dom'

export class ProductDetail extends React.Component {
    state = { product: {} }

    componentDidMount() {
        const id = Number(this.props.match.params.id);
        const product = storeData.filter(item => item.id === id);
        this.setState({ product: product });
    }


    render() {
        return <>
            {!this.state.product.length > 0 ? <div>Loading</div> : this.state.product.map(product => {
                return <div>
                    <h4>{product.title}</h4>
                    <h5>Price : {product.price}</h5>
                    <img src={product.imageUrl}/>
                    <br></br>
                    <button><Link to="/products">Back</Link></button>
                </div>
            })}
        </>
    }
}