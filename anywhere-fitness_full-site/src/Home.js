import React from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import Signup from './Components/Signup.js';
import logo from './logo.svg';
import './Home.css';

function App() {
    return (
        <div className="container">
            <div className="logo-header">
                <div className="app-nav-search-bar">
                    <nav className="top-nav">
                        <a href="">REGISTER</a>
                        <a href="">LOGIN</a>
                    </nav>
                    <div className="search-bar">
                        <form>
                            <input type="text" className="search-site" name="name" placeholder="Search This Site"></input>
                            <button className="search-btn" type="submit">GO</button>
                        </form>
                    </div>
                </div>
                <div>
                    <nav className="main-nav">
                        <a href="">HOME</a>
                        <a href="">ABOUT</a>
                        <a href="">BLOG</a>
                        <a href="">GET APP</a>
                        <a href="">SERVICES</a>
                        <a href="">SHOP</a>
                        <a href="">CONTACT</a>
                    </nav>
                </div>
            </div>
            <section classnName="first-section">
                <div className="no-sweat">
                    <p className="orange">No Sweat. No Glory.
                    <p className="black">Game On.</p></p>
                    <div className="btn-container"><button class="register-btn" type="submit">Register Now!</button></div>
                </div>
            </section>
            <section classnName="second-section">
                <div className="walking">
                    <div className="shade-container">
                        <p>The <div className="orange">Anywhere</div> Fitness<br/>App takes the stress out<br/> of coordinating workout appointments and making or accepting payments. Workout or train others from anywhere, anytime.<br/>«<div className="orange"><a href="">read more</a></div>
                        </p>
                    </div>
                </div>
            </section>
            <section classnName="third-section">
                <div className="membership">
                    <div className="membership-ad-container">
                        <h2>Membership Is Easy!</h2>
                        <p>Become an <div className="orange">Anywhere</div> Fitness member today when you register for a free fitness profile. Download our app. Answer a few simple questions and find a trainer or start your workout.</p>
                        <div className="btn-container"><button class="register-btn" type="submit">Join Now!</button></div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default App;
