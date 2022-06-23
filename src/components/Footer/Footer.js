import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
        <div className="container p-5">
            <div className='row'>
                <div class="col-lg-4 service-column d-flex border-end">
					<div class="service-icon">
                    <i class="bi bi-truck"></i>
					</div>
					<div class="services">
						<h6 class="text-uppercase">Free Shipping and Return</h6>
						<p class="text-muted">Free Shipping over <b>₹</b>&nbsp;500</p>
					</div>	
				</div>
                <div class="col-lg-4 service-column d-flex border-end">
					<div class="service-icon">
					<i class="bi bi-currency-dollar"></i>
					</div>
					<div class="services">
						<h6 class="text-uppercase">MONEY BACK GUARANTEE</h6>
						<p class="text-muted">30 Days Money Back Guarantee</p>
					</div>	
				</div>
                <div class="col-lg-4 service-column d-flex">
					<div class="service-icon">
					<i class="bi bi-headset"></i>
					</div>
					<div class="services">
						<h6 class="text-uppercase">+91-8099311757</h6>
						<p class="text-muted">24 Hours Customer Support</p>
					</div>	
				</div>
            </div>
        </div>
        <div className="text-dark p-5" style={{backgroundColor: "#DEE2E6"}}>
            <div className="container">
                <div className='row'>
                    <div className='col-lg-4 my-5'>
                        <h6 className='text-uppercase text-dark mb-3'> MONKCRATE</h6>
                        <p>The more you explore, the more you shop.</p>
                        <ul className="list-inline">
                            <li className='list-inline-item'>
                                <Link to="#" target="_blank" titel="twitter" className='text-muted text-hover-primary'>
                                    <i className="bi bi-twitter"></i>
                                </Link>
                            </li>
                            <li className='list-inline-item'>
                                <Link to="#" target="_blank" titel="twitter" className='text-muted text-hover-primary'>
                                    <i className="bi bi-facebook"></i>
                                </Link>
                            </li>
                            <li className='list-inline-item'>
                                <Link to="#" target="_blank" titel="twitter" className='text-muted text-hover-primary'>
                                    <i className="bi bi-instagram"></i>
                                </Link>
                            </li>
                            <li className='list-inline-item'>
                                <Link to="#" target="_blank" titel="twitter" className='text-muted text-hover-primary'>
                                    <i className="bi bi-pinterest"></i>
                                </Link>
                            </li>
                            <li className='list-inline-item'>
                                <Link to="#" target="_blank" titel="twitter" className='text-muted text-hover-primary'>
                                    <i className="bi bi-vimeo"></i>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-2 my-5 col-md-6">
                        <h6 className='className="text-uppercase text-dark mb-3'>
                            SHOP
                        </h6>
                        <ul className='list-unstyled'>
                            <li>
                                <Link to="#" className="text-muted">For Women</Link>
                            </li>
                            <li>
                                <Link to="#" className="text-muted">For Men</Link>
                            </li>
                            <li>
                                <Link to="#" className="text-muted">Stores</Link>
                            </li>
                            <li>
                                <Link to="#" className="text-muted">Our Blog</Link>
                            </li>
                            <li>
                                <Link to="#" className="text-muted">Shop</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-2 my-5 col-md-6">
                        <h6 className='className="text-uppercase text-dark mb-3'>
                            COMPANY
                        </h6>
                        <ul className='list-unstyled'>
                            <li>
                                <Link to="#" className="text-muted">Login</Link>
                            </li>
                            <li>
                                <Link to="#" className="text-muted">Register</Link>
                            </li>
                            <li>
                                <Link to="#" className="text-muted">Privacy Policy</Link>
                            </li>
                            <li>
                                <Link to="#" className="text-muted">Refund Policy</Link>
                            </li>
                            <li>
                                <Link to="#" className="text-muted">Terms & Conditions</Link>
                            </li>
                        </ul>
                    </div>
                    <div className='col-lg-4 my-5'>
                        <h6 className="text-uppercase text-dark mb-3">DAILY OFFERS & DISCOUNTS</h6>
                        <p className="mb-3"> To get daily offers and discounts, subscribe to our newsletter.</p>
                        <form action="#" id='newsletter-form'>
                            <div className='input-group mb-3'>
                                <input type="email" placeholder='Your Email Address' aria-label="Your Email Address" className="form-control bg-transparent border-secondary border-right-0 rounded-0"/>
                                <div className="input-group-append">
                                    <button type="submit" className='btn btn-outline-secondary border-left-0 rounded-0'>
                                        <i className="bi bi-send-fill"></i>
                                    </button>
                                </div>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
        <div className='bg-dark py-4'>
        <div className="container">
            <div className='row'>
                <div className='text-white text-center'>
                    <p className='mb-md-0' style={{letterSpacing: "3px"}}>© 2021 MONKCRATE. All rights reserved.</p>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Footer