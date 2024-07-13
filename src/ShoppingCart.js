import React from 'react';
import './assets/css/cart.css';
import './assets/css/style.css';

import maltiverse_logo from './assets/images/maltiverse_logo.svg';
import one from './assets/Cards/1.png';
import two from './assets/Cards/2.png';
import three from './assets/Cards/3.png';
import four from './assets/Cards/4.png';
import five from './assets/Cards/5.png';
import six from './assets/Cards/6.png';
// import seven from './assets/Cards/7.png';
// import eight from './assets/Cards/8.png';
import nine from './assets/Cards/9.png';
// import ten from './assets/Cards/4.png';
// import eleven from './assets/Cards/4.png';
// import twelve from './assets/Cards/4.png';
// import thirteen from './assets/Cards/4.png';
// import fourteen from './assets/Cards/4.png';
// import fiveteen from './assets/Cards/4.png';
// import sixteen from './assets/Cards/4.png';
// import seventeen from './assets/Cards/4.png';
// import eighteen from './assets/Cards/4.png';


import vertical_stroke from './assets/images/vertical_stroke.png'


const ShoppingCart = () => {
    return (
        <div className="div-box">
            <header>
                <div className="left">
                    <img src={maltiverse_logo} alt="Muiltiverse_logo" />
                </div>
                <div className="right nav-tabs">
                    <div style={{ color: 'red' }}><a href={'example.com'}>Product Listing</a></div>
                    <div><a href={'example.com'}>My Cart</a></div>
                    <div><a href={'example.com'}>Checkout</a></div>
                </div>
            </header>

            <main>
                <div className="headset-background">
                    <div className="background-text">
                        <h2>Premium Sound, Premium Savings</h2>
                        <p>Limited offer, hope on and get yours now</p>
                        <button>Buy Now</button>
                    </div>
                </div>

                <div className="fashion-header">
                    <img src={vertical_stroke} alt="" />
                    <span>Tech Gadgets</span>
                </div>

                <div className="cards-div">
                    <div className="cards">
                        <img src={one} alt="" />
                        <div>
                            <div className="product">
                                <span style={{ fontWeight: 'bold' }}>Joystick Game Controller</span>
                                <span style={{ color: 'red' }}>#11250</span>
                            </div>
                            <p>Wired UCOM Pad for PC...</p>
                        </div>
                        <button className="add-to-cart">Add to Cart</button>
                    </div>
                    <div className="cards">
                        <img src={two} alt="" />
                        <div>
                            <div className="product">
                                <span style={{ fontWeight: 'bold' }}>Apple IPhone 14 Pro</span>
                                <span style={{ color: 'red' }}>#1,450,000</span>
                            </div>
                            <p>6GB RAM + 128GB ROM</p>
                        </div>
                        <button className="add-to-cart">Add to Cart</button>
                    </div>
                    <div className="cards">
                        <img src={three} alt="" />
                        <div>
                            <div className="product">
                                <span style={{ fontWeight: 'bold' }}>Touch Screen Smart Watch</span>
                                <span style={{ color: 'red' }}>#9,170</span>
                            </div>
                            <p>For Android and IOS</p>
                        </div>
                        <button className="add-to-cart">Add to Cart</button>
                    </div>
                </div>

                <div className="fashion-header">
                    <img src={vertical_stroke} alt="" />
                    <span>Men Fashion</span>
                </div>

                <div className="cards-div">
                    <div className="cards">
                        <img src={four} alt="" />
                        <div>
                            <div className="product">
                                <span style={{ fontWeight: 'bold' }}>Apple IPhone 14 Pro</span>
                                <span style={{ color: 'red' }}>#1,450,000</span>
                            </div>
                            <p>6GB RAM + 128GB ROM</p>
                        </div>
                        <button className="add-to-cart">Add to Cart</button>
                    </div>
                    <div className="cards">
                        <img src={five} alt="" />
                        <div>
                            <div className="product">
                                <span style={{ fontWeight: 'bold' }}>Apple IPhone 14 Pro</span>
                                <span style={{ color: 'red' }}>#1,450,000</span>
                            </div>
                            <p>6GB RAM + 128GB ROM</p>
                        </div>
                        <button className="add-to-cart">Add to Cart</button>
                    </div>
                    <div className="cards">
                        <img src={six} alt="" />
                        <div>
                            <div className="product">
                                <span style={{ fontWeight: 'bold' }}>Apple IPhone 14 Pro</span>
                                <span style={{ color: 'red' }}>#1,450,000</span>
                            </div>
                            <p>6GB RAM + 128GB ROM</p>
                        </div>
                        <button className="add-to-cart">Add to Cart</button>
                    </div>
                </div>

                <div className="fashion-header">
                    <img src={vertical_stroke} alt="" />
                    <span>Women Fashion</span>
                </div>

                <div className="cards-div">
                    <div className="cards">
                        <img src={two} alt="" />
                        <div>
                            <div className="product">
                                <span style={{ fontWeight: 'bold' }}>Apple IPhone 14 Pro</span>
                                <span style={{ color: 'red' }}>#1,450,000</span>
                            </div>
                            <p>6GB RAM + 128GB ROM</p>
                        </div>
                        <button className="add-to-cart">Add to Cart</button>
                    </div>
                    <div className="cards">
                        <img src={five} alt="" />
                        <div>
                            <div className="product">
                                <span style={{ fontWeight: 'bold' }}>Apple IPhone 14 Pro</span>
                                <span style={{ color: 'red' }}>#1,450,000</span>
                            </div>
                            <p>6GB RAM + 128GB ROM</p>
                        </div>
                        <button className="add-to-cart">Add to Cart</button>
                    </div>
                    <div className="cards">
                        <img src={nine} alt="" />
                        <div>
                            <div className="product">
                                <span style={{ fontWeight: 'bold' }}>Apple IPhone 14 Pro</span>
                                <span style={{ color: 'red' }}>#1,450,000</span>
                            </div>
                            <p>6GB RAM + 128GB ROM</p>
                        </div>
                        <button className="add-to-cart">Add to Cart</button>
                    </div>
                </div>
            </main>

            <footer>
                <div>
                    <div className="footer-header">
                        <h3>For More Information</h3>
                    </div>
                    <div className="footer-address" style={{ display: 'inline-flex' }}>
                        <p>Plot 78, Ogene Street Orozo</p>
                        <p>Maltiverse.Org@gmail.com</p>
                        <p>+234 0000 000 0000</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default ShoppingCart;
