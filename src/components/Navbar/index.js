import React from "react";
import ReactDOM from "react-dom";
import { Menu, Switch, Divider } from "antd";
import RocketLogo from "../../rocket.png";
import {
    MailOutlined,
    CalendarOutlined,
    AppstoreOutlined,
    SettingOutlined,
    LinkOutlined,
    FileTextOutlined,
    SolutionOutlined,
    ShopOutlined,
} from "@ant-design/icons";
import { Logo, Head } from "./Navbar.style";
import "./custom.css";

const { SubMenu } = Menu;

export const Navbar = ({ changeTheme, theme }) => {
    const [mode, setMode] = React.useState("inline");
    // const [theme, setTheme] = React.useState("light");
    // const changeMode = (value) => {
    //     setMode(value ? "vertical" : "inline");
    // };

    // const changeTheme = (value) => {
    //     setTheme(value ? "dark" : "light");
    // };

    return (
        <>
            <Head
                background={theme === "light" ? "white" : "#001529"}
                textColor={theme === "light" ? "#001529" : "white"}
                switchColor={theme === "light" ? "white" : "#001529"}
            >
                <Logo>
                    <img src={RocketLogo}></img>
                    <span>SEAD</span>
                </Logo>

                <Switch onChange={changeTheme} />
            </Head>
            {/* <Switch onChange={changeMode} /> Change Mode */}
            {/* <Divider type="vertical" /> */}

            <Menu
                style={{ width: 256 }}
                defaultSelectedKeys={["1"]}
                defaultOpenKeys={["sub1"]}
                mode={mode}
                theme={theme}
            >
                <Menu.Item key="1" icon={<FileTextOutlined />}>
                    User Report
                </Menu.Item>
                <Menu.Item key="2" icon={<SolutionOutlined />}>
                    Manage Users
                </Menu.Item>
                <Menu.Item key="3" icon={<SolutionOutlined />}>
                    Manage Mechanics
                </Menu.Item>
                <Menu.Item key="4" icon={<ShopOutlined />}>
                    Manage Mechanics
                </Menu.Item>
            </Menu>
        </>
    );
};
