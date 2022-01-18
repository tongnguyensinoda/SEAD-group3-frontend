import React from 'react'
import Video from './videos/video.mp4'
import Video1 from './videos/video1.mp4'

import { useNavigate } from 'react-router-dom';
import "./HomeComponent.css";

export const HomeComponent =() => {
    
    let navigate = useNavigate();

    const moveToSignIn = () => {
        navigate(`/signin`);
    }

    const moveToAboutUs = () => {
        navigate(`/about`)
    }

    return (
        <section>       
            <section class='SlideContainer'>
                <div class="SlideBg">
                    <video loop autoPlay muted id="VideoBg">
                        <source src={Video} type='video/mp4'/>
                    </video>
                </div>
                <div class='SlideContent'>
                    <h1>Trust our electrician for all of your electrician services</h1>
                    <div class='SlideBtnWrapper'>
                        <h4><span className="sign-in" onClick={() => moveToSignIn()}>Get Started</span></h4>
                    </div>
                </div>
          
            </section>
            <section class="home-about">
                <div class="container">
                    <div class="row">
                        <div class="about-content">
                            <div class="row">
                                <div class="about-text">
                                    <div class="section-title text-uppercase">
                                        <h1>About Us</h1>
                                        <p class="small text-uppercase">Welcome to our Service Booking System</p>
                                    </div>
                                    <h3>Service Booking System - Assist clients who are making use of company-supplied equipment, such as repair and warranty work. Over nearly 10 years of development, We are among the greatest service providers in the industry.</h3>
                                    <div class="about-link" onClick={() => moveToAboutUs()}>Why us...?
                                    {/* <span className="sign-in" onClick={() => moveToAboutUs()}>Why us...?</span> */}
                                    </div>
                                </div>
                                <div class="about-video">
                                    <video loop autoPlay muted id="VideoBg">
                                        <source src={Video1} type='video/mp4'/>
                                    </video>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <br/>
            <section class="achievement">
                <div class="container">
                    <div class="row">
                        <div class="section-title text-center">
                            <h1>Achievement</h1>
                        </div>
                    </div>
                    <div class="row">
                        <div class="achievement-content">
                                <div class="box">
                                    <h1>10</h1>
                                    <h4>YEARS</h4>
                                    <p>Over nearly ten years of development</p>
                                </div>
                                <div class="box">
                                    <h1>05</h1>
                                    <h4>STORES</h4>
                                    <p>Five stores is operating for services</p>
                                </div>
                                <div class="box">
                                    <h1>02</h1>
                                    <h4>FACTORY</h4>
                                    <p>The system of 2 manufactory for our supplied</p>
                                </div>
                                <div class="box">
                                    <h1>04</h1>
                                    <h4>AREAS OF OPERATION</h4>
                                    <p>Warehouse - Repair Services - Consulting Services - Warranty Services</p>
                                </div>
                                <div class="box">
                                    <h1>10,000+</h1>
                                    <h4>CUSTOMERS</h4>
                                    <p>Giving love to 6000 customers in Vietnam and 8 countries around the world.</p>
                                </div>
                                <div class="box">
                                    <h1>95%</h1>
                                    <h4>SATISFIED</h4>
                                    <p>Customers are satisfied when using services</p>
                                </div>
                        </div>
                    </div>
                </div>
            </section>
        </section> 
       

        
       
    )
}

export default HomeComponent