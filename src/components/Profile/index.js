import React from "react";
import { Avatar, Menu, Dropdown, Button, Space, Descriptions } from "antd";
import SubNav from "../SubNav";
import { Wrapper, Content, Item } from "./Profile.style";
import { UserOutlined } from "@ant-design/icons";
import "./profile.css";
const Profile = ({ information }) => {
    return (
        <>
            <SubNav content="Profile"></SubNav>
            <Content>
                <Item>
                    <h2>Personal information</h2>
                </Item>
            </Content>
            <Wrapper>
                <div class="wrapper">
                    <div class="left">
                        <Avatar
                            size={145}
                            icon={<UserOutlined />}
                            style={{ marginBottom: "10px" }}
                        />
                        <h4>Hoang Viet</h4>
                        <p>Engineering</p>
                    </div>
                    <div class="right">
                        <div class="info">
                            <h3>Personal detail</h3>
                            <div class="info_data">
                                <div class="data">
                                    <h4>Email</h4>
                                    <p>{information.email}</p>
                                </div>
                                <div class="data">
                                    <h4>Phone</h4>
                                    <p>{information.phone}</p>
                                </div>
                                <div class="data">
                                    <h4>Address</h4>
                                    <p>{information.address}</p>
                                </div>
                                <div class="data">
                                    <h4>Role</h4>
                                    <p>{information.role}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </>
    );
};

export default Profile;
