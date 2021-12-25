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
    const [menuName, setMenuName] = React.useState("User Report");
    const [logo, setLogo] = React.useState(1);
    return (
        <>
            <Head
                background={theme === "light" ? "white" : "#001529"}
                textColor={theme === "light" ? "#001529" : "white"}
                switchColor={theme === "light" ? "white" : "#001529"}
            >
                <Logo>
                    {logo == 1 ? (
                        <FileTextOutlined />
                    ) : logo == 2 ? (
                        <SolutionOutlined />
                    ) : logo == 3 ? (
                        <SolutionOutlined />
                    ) : (
                        <FileTextOutlined />
                    )}

                    <span>
                        {" "}
                        {menuName == "User Report"
                            ? "User Report"
                            : menuName == "Manage Users"
                            ? "Manage Users"
                            : menuName == "Manage Mechanics"
                            ? "Manage Mechanics"
                            : "User Report"}
                    </span>
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
                <Menu.Item
                    onClick={() => {
                        setLogo(1);
                        setMenuName("User Report");
                    }}
                    key="1"
                    icon={<FileTextOutlined />}
                >
                    User Report
                </Menu.Item>
                <Menu.Item
                    onClick={() => {
                        setLogo(2);
                        setMenuName("Manage Users");
                    }}
                    key="2"
                    icon={<SolutionOutlined />}
                >
                    Manage Users
                </Menu.Item>
                <Menu.Item
                    onClick={() => {
                        setLogo(3);
                        setMenuName("Manage Mechanics");
                    }}
                    key="3"
                    icon={<SolutionOutlined />}
                >
                    Manage Mechanics
                </Menu.Item>
            </Menu>
        </>
    );
};
