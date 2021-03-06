import React from "react";
import "./SignIn.css";
import { useEffect, useState } from "react";
import SubNav from "../SubNav";
import GoogleLogin from "react-google-login";
import { useGoogleLogin } from "react-google-login";
import axios from "axios";
export const SignIn = () => {
    const initialState = {
        id: "",
        name: "",
        password: "",
        address: "",
        email: "",
        phone: "",
        type: "",
        jobCount: "",
        role: "",
    };
    const [leftText, setleftText] = useState("sign-in");
    const [overlay, setoverlay] = useState("overlay1");
    const [rightText, setrightText] = useState("sign-up");
    const [signinForm, setsigninForm] = useState("sign-up");
    const [accountForm, setaccountForm] = useState("sign-in");
    const [styleAccount, setStyleAccount] = useState("");
    const [styleSignIn, setStyleSignIn] = useState("");
    const [user, setUser] = useState(initialState);
    const [userSingIn, setUserSignIn] = useState({ email: "", password: "" });
    const [reTypePassword, setReTypePassword] = useState();

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

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
    const clientId = "144247385664-cd4c28fdmttmg6ab1t01pj0vnhovsuqs.apps.googleusercontent.com";

    const refreshTokenSetup = (res) => {
        // Timing to renew access token
        let refreshTiming = (res.tokenObj.expires_in || 3600 - 5 * 60) * 1000;

        const refreshToken = async () => {
            const newAuthRes = await res.reloadAuthResponse();
            refreshTiming = (newAuthRes.expires_in || 3600 - 5 * 60) * 1000;
            console.log("newAuthRes:", newAuthRes);
            // saveUserToken(newAuthRes.access_token);  <-- save new token
            localStorage.setItem("authToken", newAuthRes.id_token);

            // Setup the other timer after the first one
            setTimeout(refreshToken, refreshTiming);
        };

        // Setup first refresh timer
        setTimeout(refreshToken, refreshTiming);
    };
    const onSuccess = async (res) => {
        console.log("Login Success: currentUser:", res);
        localStorage.setItem(
            "information",
            JSON.stringify({
                ...user,
                name: res.profileObj.name,
                email: res.profileObj.email,
                role: "customer",
            })
        );
        window.location.href = "/";
        refreshTokenSetup(res);
    };
    const onFailure = (res) => {
        console.log("Login failed: res:", res);
    };
    const { signIn } = useGoogleLogin({
        onSuccess,
        onFailure,
        clientId,
    });
    const onSignUp = async () => {
        if (validateEmail(user.email) && user.password == reTypePassword.reTypePassword) {
            await axios
                .post("https://user-sead-group3.herokuapp.com/auth/signup", user)
                .then((res) => {
                    window.alert("Succesfully create user");
                })
                .catch((error) => window.alert(error));
            setUser(initialState);
        } else {
            if (!validateEmail(user.email)) {
                window.alert("Email is invalid");
            }
            if (user.password !== reTypePassword) {
                console.log(reTypePassword.reTypePassword);
                console.log(user.password);

                window.alert("Retype password is not match");
            }
        }
    };
    const handleRetypePassword = (event) => {
        const { name, value } = event.target;
        setReTypePassword({ [name]: value });
    };
    const handleInputChangeSignUp = (event) => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
    };
    const handleInputChangeSignIn = (event) => {
        const { name, value } = event.target;
        setUserSignIn({ ...userSingIn, [name]: value });
    };

    const onSignIn = async () => {
        await axios
            .post("https://user-sead-group3.herokuapp.com/auth/login", userSingIn)
            .then((res) => {
                console.log(res);
                localStorage.setItem("information", JSON.stringify(res.data));
                window.location.href = "/";
            })
            .catch((error) => window.alert("Wrong username or password"));
        setUserSignIn(initialState);
        console.log(userSingIn);
    };
    const validateEmail = (email) => {
        return email
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };
    const signInGitHub = async () => {
        window.open("https://user-sead-group3.herokuapp.com/oauth2/authorization/github", "_blank").focus();

        await axios
            .get("https://user-sead-group3.herokuapp.com/auth/currentuser")
            .then((res) => {
                console.log(res);
            })
            .catch((error) => window.alert("Wrong username or password"));
    };
    return (
        <div>
            <SubNav content="Sign In"></SubNav>
            <div className="container1">
                <div className={overlay} id="overlay1">
                    <div className={leftText} id="sign-in">
                        <h1 className="h1-signin">Welcome Back!</h1>
                        <p className="p-signin">
                            To keep connected with us please login with your personal info
                        </p>
                        <button
                            className="switch-button"
                            id="slide-right-button"
                            onClick={openSignIn}
                        >
                            Sign In
                        </button>
                    </div>
                    <div className={rightText} id="sign-up">
                        <h1 className="h1-signin">Hello, Friend!</h1>
                        <p className="p-signin">
                            Enter your personal details and start a journey with us
                        </p>
                        <button
                            className="switch-button"
                            id="slide-left-button"
                            onClick={openSignUp}
                        >
                            Sign Up
                        </button>
                    </div>
                </div>
                <div className="form1">
                    <div
                        className={accountForm}
                        style={{ display: styleAccount }}
                        id="sign-in-info"
                    >
                        <h1 className="h1-signin">Sign In</h1>
                        <div className="social-media-buttons">
                            {/* <div className="icon">
                                <svg viewBox="0 0 24 24">
                                    <path
                                        fill="#000000"
                                        d="M17,2V2H17V6H15C14.31,6 14,6.81 14,7.5V10H14L17,10V14H14V22H10V14H7V10H10V6A4,4 0 0,1 14,2H17Z"
                                    />
                                </svg>
                            </div> */}
                            <div className="icon" onClick={signIn} style={{ cursor: "pointer" }}>
                                <svg viewBox="0 0 24 24">
                                    <path
                                        fill="#000000"
                                        d="M23,11H21V9H19V11H17V13H19V15H21V13H23M8,11V13.4H12C11.8,14.4 10.8,16.4 8,16.4C5.6,16.4 3.7,14.4 3.7,12C3.7,9.6 5.6,7.6 8,7.6C9.4,7.6 10.3,8.2 10.8,8.7L12.7,6.9C11.5,5.7 9.9,5 8,5C4.1,5 1,8.1 1,12C1,15.9 4.1,19 8,19C12,19 14.7,16.2 14.7,12.2C14.7,11.7 14.7,11.4 14.6,11H8Z"
                                    />
                                </svg>
                            </div>
                        </div>
                        <p className="small">or use your email account:</p>
                        <form id="sign-in-form">
                            <input
                                className="input-signin"
                                type="text"
                                placeholder="Email"
                                name="email"
                                onChange={handleInputChangeSignIn}
                            />
                            <input
                                className="input-signin"
                                type="password"
                                placeholder="Password"
                                name="password"
                                onChange={handleInputChangeSignIn}
                            />
                            <br></br>
                            <p className="forgot-password">Forgot your password?</p>
                            <button className="control-button in" onClick={onSignIn} type="button">
                                Sign In
                            </button>
                        </form>
                    </div>
                    <div className={signinForm} style={{ display: styleSignIn }} id="sign-up-info">
                        <h1 className="h1-signin">Create Account</h1>
                        <div className="social-media-buttons">
                            <div className="icon">
                                <svg
                                    viewBox="0 0 24 24"
                                    onClick={signIn}
                                    style={{ cursor: "pointer" }}
                                >
                                    <path
                                        fill="#000000"
                                        d="M23,11H21V9H19V11H17V13H19V15H21V13H23M8,11V13.4H12C11.8,14.4 10.8,16.4 8,16.4C5.6,16.4 3.7,14.4 3.7,12C3.7,9.6 5.6,7.6 8,7.6C9.4,7.6 10.3,8.2 10.8,8.7L12.7,6.9C11.5,5.7 9.9,5 8,5C4.1,5 1,8.1 1,12C1,15.9 4.1,19 8,19C12,19 14.7,16.2 14.7,12.2C14.7,11.7 14.7,11.4 14.6,11H8Z"
                                    />
                                </svg>
                            </div>
                        </div>
                        <p className="small">or use your email for registration:</p>
                        <form id="sign-up-form">
                            <input
                                className="input-signin"
                                type="text"
                                placeholder="Name"
                                name="name"
                                onChange={handleInputChangeSignUp}
                            />
                            <input
                                className="input-signin"
                                type="email"
                                placeholder="Email"
                                name="email"
                                autoComplete="username"
                                onChange={handleInputChangeSignUp}
                            />
                            <input
                                className="input-signin"
                                type="password"
                                placeholder="Password"
                                name="password"
                                autoComplete="new-password"
                                onChange={handleInputChangeSignUp}
                            />
                            <input
                                className="input-signin"
                                type="password"
                                placeholder="Re-type password"
                                name="reTypePassword"
                                autoComplete="new-password"
                                onChange={handleRetypePassword}
                            />
                            <br></br>

                            <button className="control-button up" onClick={onSignUp} type="button">
                                Sign Up
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};
