import React, { Component } from 'react'
import Navbar from './Navbar'
import ProductDetails from './ProductDetails'
export default class Home extends Component {
    render() {
        return (
        <div>
         <Navbar/>
         <ProductDetails/>
         </div>
        )
    }
}
