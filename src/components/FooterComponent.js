import React from 'react'
import "./Footer.css";

function FooterComponent() {
    return (
        <footer>
        <div class="box">

            <div class="content about">
                <h2>About us</h2>
                <p> paragraphe wfdwsfsdfsdfdsf  dsfs dsf sdf sdf sdf sd sf sdfsdfsdfsdfsfsd  sf s</p>
                <ul class="social-icon">
                    <li><a href=""><i class="fa fa-facebook"></i></a></li>
                    <li><a href=""><i class="fa fa-twitter"></i></a></li>
                    <li><a href=""><i class="fa fa-instagram"></i></a></li>
                    <li><a href=""><i class="fa fa-youtube"></i></a></li>
                </ul>
            </div>

            <div class="content links">
                <h2>Links</h2>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About us</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Service</a></li>
                    
                </ul>
            </div>

            <div class="content contact">
                <h2>For more contact</h2>
                <ul class="info">
                    <li>
                        <span><i class="fa fa-map-marker"></i></span>
                        <span>Street 1<br />
                            District 1, Ho Chi Minh city<br />
                            Vietnam</span>
                    </li>
                    <li>
                        <span><i class="fa fa-phone"></i></span>
                        <span><a href="#">0909932489</a></span>
                    </li>


                    <li>
                        <span><i class="fa fa-envelope"></i></span>
                        <span><a href="#">lamnguyensinoda@gmail.com</a></span>
                   </li>


                    <li>
                        <form class="form">
                            <input type="email" class="form__field" placeholder="Subscribe Email" />
                            <button type="button" class="btn btn--primary  uppercase">Send</button>
                        </form>
                    </li>
                </ul>
            </div>

            <div>
                <br/>
                <br/>
            <p style={{ color: 'white'}}> © 2021 All Right Reserved</p>
            </div>
            
        </div>

        

    </footer>
    )
}

export default FooterComponent
