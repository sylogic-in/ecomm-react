import React, { Component } from 'react'

export default class CartDetails extends Component {
    render() {
        return (
            <div>
                <div classNameName="dropdown-menu">
				    	<div className="row total-header-section">
			      			<div className="col-lg-6 col-sm-6 col-6">
			      				<i className="fa fa-shopping-cart" aria-hidden="true"></i> <span className="badge badge-pill badge-danger">3</span>
			      			</div>
			      			<div className="col-lg-6 col-sm-6 col-6 total-section text-right">
			      				<p>Total: <span className="text-info">$2,978.24</span></p>
			      			</div>
				    	</div>
				    	<div className="row cart-detail">
		    				<div className="col-lg-4 col-sm-4 col-4 cart-detail-img">
		    					<img src={"https://images-na.ssl-images-amazon.com/images/I/811OyrCd5hL._SX425_.jpg"}></img>
		    				</div>
		    				<div className="col-lg-8 col-sm-8 col-8 cart-detail-product">
		    					<p>Sony DSC-RX100M..</p>
		    					<span className="price text-info"> $250.22</span> <span className="count"> Quantity:01</span>
		    				</div>
				    	</div>
				    	<div className="row cart-detail">
		    				<div className="col-lg-4 col-sm-4 col-4 cart-detail-img">
		    					<img src={"https://cdn2.gsmarena.com/vv/pics/blu/blu-vivo-48-1.jpg"}></img>
		    				</div>
		    				<div className="col-lg-8 col-sm-8 col-8 cart-detail-product">
		    					<p>Vivo DSC-RX100M..</p>
		    					<span className="price text-info"> $500.40</span> <span className="count"> Quantity:01</span>
		    				</div>
				    	</div>
				    	<div className="row cart-detail">
		    				<div className="col-lg-4 col-sm-4 col-4 cart-detail-img">
		    					<img src={"https://static.toiimg.com/thumb/msid-55980052,width-640,resizemode-4/55980052.jpg"}></img>
		    				</div>
		    				<div className="col-lg-8 col-sm-8 col-8 cart-detail-product">
		    					<p>Lenovo DSC-RX100M..</p>
		    					<span className="price text-info"> $445.78</span> <span className="count"> Quantity:01</span>
		    				</div>
				    	</div>
				    	<div className="row">
				    		<div className="col-lg-12 col-sm-12 col-12 text-center checkout">
				    			<button className="btn btn-primary btn-block">Checkout</button>
				    		</div>
				    	</div>
				    </div>
            </div>
        )
    }
}
