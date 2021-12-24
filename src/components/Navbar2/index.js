import React from "react";
import { Wrapper, LeftNavItem, RightNavItem, RightNav, Content } from "./Navbar.styles";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Dropdown, DropdownButton } from "react-bootstrap";
import RocketLogo from "../../rocket.png";
const Navbar = () => {
    let item;

    // const abc = () => {
    //     handleSignOut();
    //     window.location.href = "http://cloud-env.eba-8hk2mpj3.us-west-2.elasticbeanstalk.com/home";
    // };
    // console.log(account);
    let account = false;
    let image = "https://static.thenounproject.com/png/3070444-200.png";
    if (account) {
        item = (
            <>
                <Link to="/home">
                    <RightNavItem>Home Page</RightNavItem>
                </Link>

                <Link to="/information">
                    <RightNavItem>Infomation look-up</RightNavItem>
                </Link>
                <Link to="/validationPage">
                    <RightNavItem>Validation</RightNavItem>
                </Link>
                <div className="account">
                    {image}
                    <DropdownButton align="end" id="dropdown-menu-align-end" title="">
                        <li>
                            <RightNavItem>Sign-out</RightNavItem>
                        </li>
                    </DropdownButton>
                </div>
            </>
        );
    } else {
        item = (
            <>
                <Link to="/home">
                    <RightNavItem>Home Page</RightNavItem>
                </Link>
                <Link to="/management">
                    <RightNavItem>Management</RightNavItem>
                </Link>
                <Link to="/about">
                    <RightNavItem>About</RightNavItem>
                </Link>
                <Link to="/signin">
                    <RightNavItem>Sign in</RightNavItem>
                </Link>
            </>
        );
    }

    return (
        <Wrapper>
            <Content>
                <LeftNavItem content="SEAD">
                    <img src={RocketLogo}></img>
                </LeftNavItem>
                <RightNav>{item}</RightNav>
            </Content>
        </Wrapper>
    );
};
export default Navbar;
