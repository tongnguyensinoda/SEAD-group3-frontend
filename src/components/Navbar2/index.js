import React from "react";
import { Wrapper, LeftNavItem, RightNavItem, RightNav, Content } from "./Navbar.styles";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useState } from "react";
// import { Dropdown, DropdownButton } from "react-bootstrap";
import RocketLogo from "../../rocket.png";
import { MechanicForm } from "../Mechanic";
import { Avatar, Menu, Dropdown, Button, Space, Descriptions } from "antd";
import { UserOutlined } from "@ant-design/icons";

const Navbar = () => {
    const [role, setRole] = useState(localStorage.getItem("roles"));
    let item;

    // const abc = () => {
    //     handleSignOut();
    //     window.location.href = "http://cloud-env.eba-8hk2mpj3.us-west-2.elasticbeanstalk.com/home";
    // };
    // console.log(account);
    let image;
    if (role === "customer" || role === "mechanic") {
        image = <Avatar size={34} icon={<UserOutlined />} />;
    } else {
        image = "";
    }
    const handleSignOut = () => {
        setRole("");
    };
    const menu = (
        <Menu>
            <Menu.Item>
                <Link to="/profile">Profile</Link>
            </Menu.Item>
            {/* <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                    2nd menu item
                </a>
            </Menu.Item> */}
            <Menu.Item>
                <div onClick={handleSignOut}>Sign Out</div>
            </Menu.Item>
        </Menu>
    );

    if (role === "customer" || role === "mechanic") {
        item = (
            <>
                <Link to="/home">
                    <RightNavItem>Home Page</RightNavItem>
                </Link>
                <Link to="/management">
                    <RightNavItem>Management</RightNavItem>
                </Link>
                <Link to="/categoryService">
                    <RightNavItem>Category Service</RightNavItem>
                </Link>
                <Link to="/about">
                    <RightNavItem>About</RightNavItem>
                </Link>
                <Link to="/mechanicForm">
                    <RightNavItem>Mechanic Form</RightNavItem>
                </Link>
                <Dropdown overlay={menu} placement="bottomCenter">
                    <div className="account">
                        {image}
                        <span>{localStorage.getItem("email")}</span>
                    </div>
                </Dropdown>
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
                <Link to="/categoryService">
                    <RightNavItem>Category Service</RightNavItem>
                </Link>
                <Link to="/about">
                    <RightNavItem>About</RightNavItem>
                </Link>
                <Link to="/signin">
                    <RightNavItem>Sign in</RightNavItem>
                </Link>
                <Link to="/mechanicForm">
                    <RightNavItem>Mechanic Form</RightNavItem>
                </Link>
            </>
        );
    }

    return (
        <Wrapper>
            <Content>
                <LeftNavItem content="SEAD" to="/home">
                    <Link to="/home">
                        <img src={RocketLogo}></img>
                    </Link>
                </LeftNavItem>

                <RightNav>{item}</RightNav>
            </Content>
        </Wrapper>
    );
};
export default Navbar;
