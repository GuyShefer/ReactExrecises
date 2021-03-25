import React from 'react'
import { Link } from 'react-router-dom'

export class Header extends React.Component {

    render() {
        return <>
            <button><Link to="/">Home</Link></button>
            <button><Link to="/products">products</Link></button>
        </>
    }
}