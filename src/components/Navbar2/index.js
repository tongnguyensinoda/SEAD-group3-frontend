import React from "react";
import { Wrapper, LeftNavItem, RightNavItem, RightNav, Content } from "./Navbar.styles";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useState } from "react";
// import { Dropdown, DropdownButton } from "react-bootstrap";
import RocketLogo from "../../rocket.png";
import { MechanicForm } from "../Mechanic";
import { Avatar, Menu, Dropdown, Button, Space, Descriptions } from "antd";
import { UserOutlined } from "@ant-design/icons";

const Navbar = ({ information }) => {
    let item;
    let image;
    if (
        information.role === "customer" ||
        information.role === "mechanic" ||
        information.role === "admin"
    ) {
        image = <Avatar size={34} icon={<UserOutlined />} />;
    } else {
        image = "";
    }

    const handleSignOut = () => {
        localStorage.removeItem("information");
        window.location.href = "/";
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

    if (information.role === "customer") {
        item = (
            <>
                <Link to="/home">
                    <RightNavItem>Home Page</RightNavItem>
                </Link>
                <Link to="/categoryService">
                    <RightNavItem>Category Service</RightNavItem>
                </Link>
                <Link to="/about">
                    <RightNavItem>About</RightNavItem>
                </Link>
                <Dropdown overlay={menu} placement="bottomCenter">
                    <div className="account">
                        {image}
                        <span>{information.name}</span>
                    </div>
                </Dropdown>
            </>
        );
    } else if (information.role === "mechanic") {
        item = (
            <>
                <Link to="/home">
                    <RightNavItem>Home Page</RightNavItem>
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
                        <span>{information.name}</span>
                    </div>
                </Dropdown>
            </>
        );
    } else if (information.role === "admin") {
        item = (
            <>
                <Link to="/home">
                    <RightNavItem>Home Page</RightNavItem>
                </Link>
                <Link to="/management">
                    <RightNavItem>Management</RightNavItem>
                </Link>
                <Dropdown overlay={menu} placement="bottomCenter">
                    <div className="account">
                        {image}
                        <span>{information.name}</span>
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
                <LeftNavItem content="REE CORPORATION" to="/home">
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
