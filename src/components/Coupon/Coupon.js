import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import css from './Coupon.css'

class Coupon extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <nav className="site-header sticky-top py-1">
                    <div className='container d-flex flex-column flex-md-row justify-content-around'>
                        <div className='logowrapper'><img className='nike-logo' src='nike.jpg' /></div>
                        <Link to='/'><div className="py-2 d-none d-md-inline-block" > Product</div></Link>
                        <Link to='/coupon'><div className="py-2 d-none d-md-inline-block"> Coupon</div></Link>
                        <Link to='/cart'><div className="py-2 d-none d-md-inline-block"> Cart</div></Link>
                        <Link to='/'><div className="py-2 d-none d-md-inline-block"> Login</div></Link>
                    </div>
                </nav>
                <div className='card-deck mb-3 text-center'>
                    <div class="card mb-4 box-shadow">
                        <div class="card-body">
                            <h1 class="card-title pricing-card-title">$35 <small class="text-muted">Discount</small></h1>
                            <ul class="list-unstyled mt-3 mb-4">
                                <li>Enjoy $35 discount</li>
                                <li>Enjoy $35 discount</li>
                                <li>Enjoy $35 discount</li>
                                <li>Enjoy $35 discount</li>
                            </ul>
                            <button type="button" class="btn btn-lg btn-block btn-dark" disabled>EZ3535</button>
                        </div>
                    </div>
                    <div class="card mb-4 box-shadow">
                        <div class="card-body">
                            <h1 class="card-title pricing-card-title">Free Shipping</h1>
                            <ul class="list-unstyled mt-3 mb-4">
                                <li>Enjoy Free Shipping</li>
                                <li>Enjoy Free Shipping</li>
                                <li>Enjoy Free Shipping</li>
                                <li>Enjoy Free Shipping</li>
                            </ul>
                            <button type="button" class="btn btn-lg btn-block btn-dark" disabled>FREESHOOTING</button>
                        </div>
                    </div>
                    <div class="card mb-4 box-shadow">
                        <div class="card-body">
                            <h1 class="card-title pricing-card-title">$15 <small class="text-muted">Discount</small></h1>
                            <ul class="list-unstyled mt-3 mb-4">
                                <li>ENJOY $15 discount</li>
                                <li>ENJOY $15 discount</li>
                                <li>ENJOY $15 discount</li>
                                <li>ENJOY $15 discount</li>
                            </ul>
                            <button type="button" class="btn btn-lg btn-block btn-dark" disabled>BABYDC</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Coupon