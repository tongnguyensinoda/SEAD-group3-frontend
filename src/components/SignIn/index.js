import React from "react";
import "./SignIn.css";
import { useState } from "react";
import SubNav from "../SubNav";

export const SignIn = () => {
    // var overlay = document.getElementById("overlay");

    // // Buttons to 'switch' the page
    // var openSignUpButton = document.getElementById("slide-left-button");
    // var openSignInButton = document.getElementById("slide-right-button");

    // // The sidebars
    // var leftText = document.getElementById("sign-in");
    // var rightText = document.getElementById("sign-up");

    // // The forms
    // var accountForm = document.getElementById("sign-in-info");
    // var signinForm = document.getElementById("sign-up-info");

    // Open the Sign Up page
    const [leftText, setleftText] = useState("sign-in");
    const [overlay, setoverlay] = useState("overlay1");
    const [rightText, setrightText] = useState("sign-up");
    const [signinForm, setsigninForm] = useState("sign-up");
    const [accountForm, setaccountForm] = useState("sign-in");
    const [styleAccount, setStyleAccount] = useState("");
    const [styleSignIn, setStyleSignIn] = useState("");

    const openSignUp = () => {
        // Remove classes so that animations can restart on the next 'switch'
        // leftText.classList.remove("overlay-text-left-animation-out");
        // overlay.classList.remove("open-sign-in");
        // rightText.classList.remove("overlay-text-right-animation");
        // Add classes for animations
        setaccountForm("sign-in form-left-slide-out");
        // accountForm.className += " form-left-slide-out";
        setrightText("sign-up overlay-text-right-animation-out");
        // rightText.className += " overlay-text-right-animation-out";
        // overlay.className += " open-sign-up";
        setoverlay("overlay1 open-sign-up");
        // leftText.className += " overlay-text-left-animation";
        setleftText("sign-in overlay-text-left-animation");
        // hide the sign up form once it is out of view
        setTimeout(function () {
            // accountForm.classList.remove("form-left-slide-in");
            // accountForm.style.display = "none";
            // accountForm.classList.remove("form-left-slide-out");
            setaccountForm("sign-in");
            setStyleAccount("none");
        }, 700);
        // display the sign in form once the overlay begins moving right
        setTimeout(function () {
            // signinForm.style.display = "flex";
            // signinForm.classList += " form-right-slide-in";
            setsigninForm("sign-up form-right-slide-in");
            setStyleSignIn("flex");
        }, 200);
    };

    // Open the Sign In page
    const openSignIn = () => {
        // Remove classes so that animations can restart on the next 'switch'
        // leftText.classList.remove("overlay-text-left-animation");
        // overlay.classList.remove("open-sign-up");
        // rightText.classList.remove("overlay-text-right-animation-out");
        // // Add classes for animations
        // signinForm.classList += " form-right-slide-out";
        // leftText.className += " overlay-text-left-animation-out";
        // overlay.className += " open-sign-in";
        // rightText.className += " overlay-text-right-animation";

        setsigninForm("sign-up form-right-slide-out");
        setleftText("sign-in overlay-text-left-animation-out");
        setoverlay("overlay1 open-sign-in");
        setrightText("sign-up overlay-text-right-animation");

        // hide the sign in form once it is out of view
        setTimeout(function () {
            // signinForm.classList.remove("form-right-slide-in");
            // signinForm.style.display = "none";
            // signinForm.classList.remove("form-right-slide-out");
            setsigninForm("sign-up");
            setStyleSignIn("none");
        }, 700);
        // display the sign up form once the overlay begins moving left
        setTimeout(function () {
            // accountForm.style.display = "flex";
            // accountForm.classList += " form-left-slide-in";
            setaccountForm("sign-in form-left-slide-in");
            setStyleAccount("flex");
        }, 200);
    };

    return (
        <div>
            <SubNav content="Sign In"></SubNav>
            <div class="container1">
                <div className={overlay} id="overlay1">
                    <div class={leftText} id="sign-in">
                        <h1 className="h1-signin">Welcome Back!</h1>
                        <p className="p-signin">
                            To keep connected with us please login with your personal info
                        </p>
                        <button class="switch-button" id="slide-right-button" onClick={openSignIn}>
                            Sign In
                        </button>
                    </div>
                    <div className={rightText} id="sign-up">
                        <h1 className="h1-signin">Hello, Friend!</h1>
                        <p className="p-signin">
                            Enter your personal details and start a journey with us
                        </p>
                        <button class="switch-button" id="slide-left-button" onClick={openSignUp}>
                            Sign Up
                        </button>
                    </div>
                </div>
                <div class="form1">
                    <div class={accountForm} style={{ display: styleAccount }} id="sign-in-info">
                        <h1 className="h1-signin">Sign In</h1>
                        <div class="social-media-buttons">
                            <div class="icon">
                                <svg viewBox="0 0 24 24">
                                    <path
                                        fill="#000000"
                                        d="M17,2V2H17V6H15C14.31,6 14,6.81 14,7.5V10H14L17,10V14H14V22H10V14H7V10H10V6A4,4 0 0,1 14,2H17Z"
                                    />
                                </svg>
                            </div>
                            <div class="icon">
                                <svg viewBox="0 0 24 24">
                                    <path
                                        fill="#000000"
                                        d="M23,11H21V9H19V11H17V13H19V15H21V13H23M8,11V13.4H12C11.8,14.4 10.8,16.4 8,16.4C5.6,16.4 3.7,14.4 3.7,12C3.7,9.6 5.6,7.6 8,7.6C9.4,7.6 10.3,8.2 10.8,8.7L12.7,6.9C11.5,5.7 9.9,5 8,5C4.1,5 1,8.1 1,12C1,15.9 4.1,19 8,19C12,19 14.7,16.2 14.7,12.2C14.7,11.7 14.7,11.4 14.6,11H8Z"
                                    />
                                </svg>
                            </div>
                            <div class="icon">
                                <svg viewBox="0 0 24 24">
                                    <path
                                        fill="#000000"
                                        d="M21,21H17V14.25C17,13.19 15.81,12.31 14.75,12.31C13.69,12.31 13,13.19 13,14.25V21H9V9H13V11C13.66,9.93 15.36,9.24 16.5,9.24C19,9.24 21,11.28 21,13.75V21M7,21H3V9H7V21M5,3A2,2 0 0,1 7,5A2,2 0 0,1 5,7A2,2 0 0,1 3,5A2,2 0 0,1 5,3Z"
                                    />
                                </svg>
                            </div>
                        </div>
                        <p class="small">or use your email account:</p>
                        <form id="sign-in-form">
                            <input className="input-signin" type="text" placeholder="Email" />
                            <input
                                className="input-signin"
                                type="password"
                                placeholder="Password"
                            />
                            <br></br>
                            <p class="forgot-password">Forgot your password?</p>
                            <button class="control-button in">Sign In</button>
                        </form>
                    </div>
                    <div class={signinForm} style={{ display: styleSignIn }} id="sign-up-info">
                        <h1 className="h1-signin">Create Account</h1>
                        <div class="social-media-buttons">
                            <div class="icon">
                                <svg viewBox="0 0 24 24">
                                    <path
                                        fill="#000000"
                                        d="M17,2V2H17V6H15C14.31,6 14,6.81 14,7.5V10H14L17,10V14H14V22H10V14H7V10H10V6A4,4 0 0,1 14,2H17Z"
                                    />
                                </svg>
                            </div>
                            <div class="icon">
                                <svg viewBox="0 0 24 24">
                                    <path
                                        fill="#000000"
                                        d="M23,11H21V9H19V11H17V13H19V15H21V13H23M8,11V13.4H12C11.8,14.4 10.8,16.4 8,16.4C5.6,16.4 3.7,14.4 3.7,12C3.7,9.6 5.6,7.6 8,7.6C9.4,7.6 10.3,8.2 10.8,8.7L12.7,6.9C11.5,5.7 9.9,5 8,5C4.1,5 1,8.1 1,12C1,15.9 4.1,19 8,19C12,19 14.7,16.2 14.7,12.2C14.7,11.7 14.7,11.4 14.6,11H8Z"
                                    />
                                </svg>
                            </div>
                            <div class="icon">
                                <svg viewBox="0 0 24 24">
                                    <path
                                        fill="#000000"
                                        d="M21,21H17V14.25C17,13.19 15.81,12.31 14.75,12.31C13.69,12.31 13,13.19 13,14.25V21H9V9H13V11C13.66,9.93 15.36,9.24 16.5,9.24C19,9.24 21,11.28 21,13.75V21M7,21H3V9H7V21M5,3A2,2 0 0,1 7,5A2,2 0 0,1 5,7A2,2 0 0,1 3,5A2,2 0 0,1 5,3Z"
                                    />
                                </svg>
                            </div>
                        </div>
                        <p class="small">or use your email for registration:</p>
                        <form id="sign-up-form">
                            <input className="input-signin" type="text" placeholder="Name" />
                            <input
                                className="input-signin"
                                type="email"
                                placeholder="Email"
                                autoComplete="username"
                            />
                            <input
                                className="input-signin"
                                type="password"
                                placeholder="Password"
                                autoComplete="new-password"
                            />
                            <input
                                className="input-signin"
                                type="password"
                                placeholder="Re-type password"
                                autoComplete="new-password"
                            />
                            <br></br>
                            <select className="select-singin" name="userType" id="userType">
                                <option value="" disabled selected>
                                    Account Type
                                </option>
                                <option value="Shop/Mechanic">Shop/Mechanic</option>
                                <option value="User">User</option>
                            </select>

                            <button class="control-button up">Sign Up</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};
