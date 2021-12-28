import React from "react";
import "./Header.css";
import { Navbar, Container } from "react-bootstrap";
import Rocket from "../rocket.png";
function HeaderComponent() {
    return (
        // <div class="navbar">
        //     <a class="logo">
        //         <img
        //             style={{ height: "70px", width: "100px" }}
        //             src="https://api.hatchwise.com/api/public/storage/assets/contests/entries/L989778-20180310072325.jpg"
        //             rounded
        //         />
        //     </a>
        //     <a href="/">HOME</a>
        //     <div class="dropdown">
        //         <button class="dropbtn">
        //             SERVICE
        //             <i class="fa fa-caret-down"></i>
        //         </button>
        //         <div class="dropdown-content">
        //             <a href="#">Link 1</a>
        //             <a href="#">Link 2</a>
        //             <a href="#">Link 3</a>
        //         </div>
        //     </div>
        //     <a href="/management">
        //         <i class="fa fa-phone"></i>Management
        //     </a>
        //     <a href="about">
        //         <i class="fa fa-user"></i>ABOUT
        //     </a>
        //     <a href="/signin">
        //         <i class="fa fa-phone"></i>CONTACT US
        //     </a>
        // </div>
        <>
            <header>
                <div id="brand">
                    <a href="/">MyCompany</a>
                </div>
                <nav>
                    <ul className="nav-ul">
                        <li className="nav-li">
                            <a className="nav-a" href="/home">
                                Home
                            </a>
                        </li>
                        <li className="nav-li">
                            <a className="nav-a" href="/management">
                                Management
                            </a>
                        </li>
                        <li className="nav-li">
                            <a className="nav-a" href="/service">
                                Service
                            </a>
                        </li>
                        <li className="nav-li">
                            <a className="nav-a" href="/about">
                                About
                            </a>
                        </li>
                        <li id="login" className="nav-li">
                            <a className="nav-a" href="/signin">
                                Sing in
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
}

export default HeaderComponent;
