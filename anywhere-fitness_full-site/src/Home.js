import React from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import Signup from './Components/Signup.js';
import logo from './logo.svg';
import aerobics from './img/aerobics_andrea-piacquadio.jpg';
import biking from './img/biking_munbaik.jpg';
import running from './img/running_nathan-cowley.png';
import swimming from './img/swimming_guduru-ajay-bhargav.png';
import stretching from './img/stretching_cottonbro.jpg';
import walking from './img/walking_evg-culture.jpg';
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
            <section className="first-section">
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
            <section className="third-section">
                <div className="membership">
                    <div className="membership-ad-container">
                        <h2>Membership Is Easy!</h2>
                        <p>Become an <div className="orange">Anywhere</div> Fitness member today when you register for a free fitness profile. Download our app. Answer a few simple questions and find a trainer or start your workout.</p>
                        <div className="btn-container"><button class="register-btn" type="submit">Join Now!</button></div>
                    </div>
                </div>
            </section>
            <section className="fourth-section">
                <div className="trainers">
                    <div className="first-trainer-container"></div>
                    <div className="second-trainer-container">
                        <div className="second-trainer-img"></div>
                        <div className="trainer-ad-container">
                            <h2 className="orange">Take Your Training to the World!</h2>
                            <p>With the <div className="orange">Anywhere</div> Fitness App, you can virtually train an unlimited number of clients and securely process payments from anywhere, anytime. Open your training classes to the world or train clients one on one.</p>
                            <h3 className="white">Own your fit business!</h3>
                            <div className="btn-container"><button class="trainer-register-btn" type="submit">Become a Trainer</button></div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="fifth-section">
                <div className="choose-workout">
                    <div className="choose-workout-title-img"></div>
                    <div className="workouts-container">
                        <div className="workout-type-container">
                            <div className="workout-type"><a href=""><img src={aerobics}></img></a></div>
                            <div className="workout-type"><a href=""><img src={biking}></img></a></div>
                            <div className="workout-type"><a href=""><img src={running}></img></a></div>
                        </div>
                        <div className="workout-type-container">
                            <div className="workout-type"><a href=""><img src={swimming}></img></a></div>
                            <div className="workout-type"><a href=""><img src={stretching}></img></a></div>
                            <div className="workout-type"><a href=""><img src={walking}></img></a></div>
                        </div>
                    </div>
                    <div className="workout-btn-container">
                        <div className="btn-container"><button class="more-btn" type="submit">more workouts</button></div>
                    </div>
                </div>
            </section>
            <section className="sixth-section">
                <div className="trainer-special">
                    <div className="trainer-special-ad-container">
                        <h2><div className="orange">New</div> Trainer Special!</h2>
                        <p>Become a Trainer with<br/>
                        Anywhere Fitness today and<br/>
                        get zero payment processing<br/>
                        fees for your first month.</p>
                        <p className="small">(applies to new trainers only)</p>
                        <p><br/></p>
                        <p>Download the Anywhere<br/>
                        Fitness app. Answer a few<br/>
                        simple questions and start<br/>
                        selling your training today.</p>
                    </div>
                    <div className="trainer-special-ad-container">
                        <p><ul>
                            <li>Get a free trainer profile</li>
                            <li>Connect with your clients</li>
                            <li>Create marketing emails</li>
                            <li>Create an e-newsletter</li>
                            <li>Stream trainings LIVE</li>
                            <li>Pre-record trainings</li>
                            <li>Track sales & channels</li>
                            <li>Get business support</li>
                            <li>Accept payments<br/>
                            online, in-app<br/>
                            and in-person</li>
                            </ul></p>
                        <div className="btn-container"><button class="trainer-register-btn" type="submit">Register Now!</button></div>
                    </div>
                </div>
            </section>
            <footer>
                <section className="bottom">
                    <div className="sitewide-footer">
                        <div className="footer-container">
                            <h4><div className="orange">Anywhere</div> Fitness</h4>
                            <a href="">About The AF App</a>
                            <a href="">About The AF Team</a>
                            <a href="">AF Careers</a>
                            <a href="">The AF Blog</a>
                            <a href="">The AF Shop</a>
                        </div>
                        <div className="footer-container">
                            <h4><div className="orange">Anywhere</div> Fitness</h4>
                            <a href="">About The AF App</a>
                            <a href="">About The AF Team</a>
                            <a href="">AF Careers</a>
                            <a href="">The AF Blog</a>
                            <a href="">The AF Shop</a>
                        </div>
                        <div className="footer-container">
                            <h4><div className="orange">Anywhere</div> Fitness</h4>
                            <a href="">About The AF App</a>
                            <a href="">About The AF Team</a>
                            <a href="">AF Careers</a>
                            <a href="">The AF Blog</a>
                            <a href="">The AF Shop</a>
                        </div>
                        <div className="footer-container">
                            <h4><div className="orange">Anywhere</div> Fitness</h4>
                            <a href="">About The AF App</a>
                            <a href="">About The AF Team</a>
                            <a href="">AF Careers</a>
                            <a href="">The AF Blog</a>
                            <a href="">The AF Shop</a>
                        </div>
                    </div>
                </section>
                <section className="footer-copyright">
                    <div className="copyright-container">
                        <div className="copyright">
                            <p>Copyright &copy; 2021 by Shenica R. Graham and GSyndicates, LLC. All Rights Reserved</p>
                        </div>
                        <div className="copyright-search">
                            <div className="search-bar">
                                <form>
                                    <input type="text" className="search-site" name="name" placeholder="Search This Site"></input>
                                    <button className="search-btn" type="submit">GO</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </footer>
        </div>
    );
}

export default App;
