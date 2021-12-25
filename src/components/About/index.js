import React from "react";
import "./About.css";
import AboutUs from "../../about-us.jpg";

function AboutUsComponent() {
    return (
        <>
            <section className="section2" id="section2">
                <img class="image" src={AboutUs}></img>
                <div class="content3">
                    <h2>About Us</h2>
                    <span></span>

                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis aspernatur
                        voluptas inventore ab voluptates nostrum minus illo laborum harum laudantium
                        earum ut, temporibus fugiat sequi explicabo facilis unde quos corporis!
                    </p>

                    <ul class="links-about">
                        <li>
                            <a href="#section2">work</a>
                        </li>
                        <br></br>
                        <li>
                            <a href="#">service</a>
                        </li>
                        <br></br>
                        <li>
                            <a href="#contact-us-section">contact</a>
                        </li>
                    </ul>

                    <ul class="icons">
                        <li>
                            <i class="fa fa-twitter"></i>
                        </li>
                        <li>
                            <i class="fa fa-facebook"></i>
                        </li>
                        <li>
                            <i class="fa fa-github"></i>
                        </li>
                        <li>
                            <i class="fa fa-pinterest"></i>
                        </li>
                    </ul>
                </div>
            </section>
            <div class="container2" id="contact-us-section">
                <div class="content">
                    <div class="left-side">
                        <div class="address details">
                            <i class="fas fa-map-marker-alt"></i>
                            <div class="topic">Address</div>
                            <div class="text-one">Surkhet, NP12</div>
                            <div class="text-two">Birendranagar 06</div>
                        </div>
                        <div class="phone details">
                            <i class="fas fa-phone-alt"></i>
                            <div class="topic">Phone</div>
                            <div class="text-one">+0098 9893 5647</div>
                            <div class="text-two">+0096 3434 5678</div>
                        </div>
                        <div class="email details">
                            <i class="fas fa-envelope"></i>
                            <div class="topic">Email</div>
                            <div class="text-one">codinglab@gmail.com</div>
                            <div class="text-two">info.codinglab@gmail.com</div>
                        </div>
                    </div>

                    <div class="right-side">
                        <div class="topic-text">Send us a message</div>
                        <p>
                            If you have any work from me or any types of quries related to my
                            tutorial, you can send me message from here. It's my pleasure to help
                            you.
                        </p>
                        <form action="#">
                            <div class="input-box">
                                <input type="text" placeholder="Enter your name" />
                            </div>
                            <div class="input-box">
                                <input type="text" placeholder="Enter your email" />
                            </div>
                            <div class="input-box message-box">
                                <input type="text" placeholder="Enter your messsage" />
                            </div>
                            <div class="button">
                                <input type="button" value="Send Now" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* <div>
                <div class="wrapper">
                    <div class="hr">
                        <br />
                        <h2>Our Mission</h2>
                        <br />
                    </div>
                </div>

                <div class="wrapper">
                    <h2>About</h2>
                    <div>
                        <img
                            src="https://vidyasheela.com/web-contents/website-components/About-Us-Pages/responsive-about-us-page-html/teaching.png"
                            alt="img"
                        />
                        <p>
                            A school is an educational institution designed to provide learning
                            spaces and learning environments for the teaching of students under the
                            direction of teachers. Most countries have systems of formal education,
                            which is sometimes compulsory. teenagers who have completed primary
                            education. An institution where higher education is taught, is commonly
                            called a university college or university.{" "}
                        </p>
                        <p>
                            A school is an educational institution designed to provide learning
                            spaces and learning environments for the teaching of students under the
                            direction of teachers. Most countries have systems of formal education,
                            which is sometimes compulsory. teenagers who have completed primary
                            education. An institution where higher education is taught, is commonly
                            called a university college or university.{" "}
                        </p>
                    </div>
                </div>

                <div class="wrapper">
                    <h2>Faculties</h2>
                    <div class="faculties">
                        <div class="unit">
                            <img
                                src="https://vidyasheela.com/web-contents/website-components/About-Us-Pages/responsive-about-us-page-html/Director.jpg"
                                alt=""
                            />
                            <p>Jona Chen, Director</p>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus unde
                                aliquid laborum voluptatum distinctio nobis?'
                            </p>
                        </div>
                        <div class="unit">
                            <img
                                src="https://vidyasheela.com/web-contents/website-components/About-Us-Pages/responsive-about-us-page-html/Principal.jpg"
                                alt=""
                            />
                            <p>Mathew Tram, Principal</p>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus unde
                                aliquid laborum voluptatum distinctio nobis?'
                            </p>
                        </div>
                        <div class="unit">
                            <img
                                src="https://vidyasheela.com/web-contents/website-components/About-Us-Pages/responsive-about-us-page-html/vice-principal.jpg"
                                alt=""
                            />
                            <p>Lawn Sethi, Vice Principal</p>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus unde
                                aliquid laborum voluptatum distinctio nobis?'
                            </p>
                        </div>
                        <div class="unit">
                            <img
                                src="https://vidyasheela.com/web-contents/website-components/About-Us-Pages/responsive-about-us-page-html/vice-principal.jpg"
                                alt=""
                            />
                            <p>Lawn Sethi, Vice Principal</p>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus unde
                                aliquid laborum voluptatum distinctio nobis?'
                            </p>
                        </div>

                        <div class="unit">
                            <img
                                src="https://vidyasheela.com/web-contents/website-components/About-Us-Pages/responsive-about-us-page-html/vice-principal.jpg"
                                alt=""
                            />
                            <p>Lawn Sethi, Vice Principal</p>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus unde
                                aliquid laborum voluptatum distinctio nobis?'
                            </p>
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    );
}

export default AboutUsComponent;
