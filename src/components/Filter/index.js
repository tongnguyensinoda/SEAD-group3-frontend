import React from "react";
import { Menu, Dropdown, Button } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { Wrapper } from "./Filter.style";
const Filter = (props) => {
    const { SubMenu } = Menu;
    const {
        // handleSortID,
        // handleSortName,
        // handleSortAmount,
        // handleSortPrice,
        // handleSortBrand,
        // handleSortType,
        theme,
        deleteFilter,
        filters,
    } = props;
    let temp = Object.values(filters);
    let temp2 = [];
    console.log(temp);
    for (let i = 0; i < temp.length; i++) {
        if (i !== 0 && temp[i] !== "" && temp[i] !== null) {
            temp2.push(temp[i]);
        }
    }
    let notFilter = true;
    if (temp2.length < 1) {
        notFilter = false;
    }
    const filter = (
        <Menu>
            <SubMenu
                title="Shoes"
                key="shoes"
                onTitleClick={(e) => {
                    // handleSortType(e.key);
                }}
            >
                <Menu.Item
                    key="adidas"
                    onClick={(e) => {
                        // handleSortType(e.key);
                    }}
                >
                    Adidas
                </Menu.Item>
                <Menu.Item
                    key="nike"
                    onClick={(e) => {
                        // handleSortType(e.key);
                    }}
                >
                    Nike
                </Menu.Item>
                <Menu.Item
                    key="puma"
                    onClick={(e) => {
                        // handleSortType(e.key);
                    }}
                >
                    Puma
                </Menu.Item>
                <Menu.Item
                    key="new balance"
                    onClick={(e) => {
                        // handleSortType(e.key);
                    }}
                >
                    New Balance
                </Menu.Item>
            </SubMenu>
            <SubMenu
                title="Clothes"
                key="clothes"
                onTitleClick={(e) => {
                    // handleSortType(e.key);
                }}
            >
                <Menu.Item
                    key="gucci"
                    onClick={(e) => {
                        // handleSortType(e.key);
                    }}
                >
                    Gucci
                </Menu.Item>
                <Menu.Item
                    key="fendi"
                    onClick={(e) => {
                        // handleSortType(e.key);
                    }}
                >
                    Fendi
                </Menu.Item>
            </SubMenu>

            <SubMenu
                title="Phone"
                key="phone"
                onTitleClick={(e) => {
                    // handleSortType(e.key);
                }}
            >
                <Menu.Item
                    key="iphone"
                    onClick={(e) => {
                        // handleSortType(e.key);
                    }}
                >
                    Iphone
                </Menu.Item>
                <Menu.Item
                    key="samsung"
                    onClick={(e) => {
                        // handleSortType(e.key);
                    }}
                >
                    Samsung
                </Menu.Item>
                <Menu.Item
                    key="xiaomi"
                    onClick={(e) => {
                        // handleSortType(e.key);
                    }}
                >
                    Xiaomi
                </Menu.Item>
                <Menu.Item
                    key="huwei"
                    onClick={(e) => {
                        // handleSortType(e.key);
                    }}
                >
                    Huwei
                </Menu.Item>
            </SubMenu>
        </Menu>
    );
    const sortMenu = (
        <Menu>
            <SubMenu title="ID" key="id">
                <Menu.Item
                    key="20"
                    onClick={(e) => {
                        // handleSortID(e.key);
                    }}
                >
                    Asc
                </Menu.Item>
                <Menu.Item
                    key="21"
                    onClick={(e) => {
                        // handleSortID(e.key);
                    }}
                >
                    Des
                </Menu.Item>
            </SubMenu>
            <SubMenu title="Name" key="name">
                <Menu.Item
                    key="22"
                    onClick={(e) => {
                        // handleSortName(e.key);
                    }}
                >
                    Asc
                </Menu.Item>
                <Menu.Item
                    key="23"
                    onClick={(e) => {
                        // handleSortName(e.key);
                    }}
                >
                    Des
                </Menu.Item>
            </SubMenu>
            <SubMenu title="Price" key="price">
                <Menu.Item
                    key="24"
                    onClick={(e) => {
                        // handleSortPrice(e.key);
                    }}
                >
                    Asc
                </Menu.Item>
                <Menu.Item
                    key="25"
                    onClick={(e) => {
                        // handleSortPrice(e.key);
                    }}
                >
                    Des
                </Menu.Item>
            </SubMenu>
            <SubMenu title="Amount" key="amount">
                <Menu.Item
                    key="26"
                    onClick={(e) => {
                        // handleSortAmount(e.key);
                    }}
                >
                    Asc
                </Menu.Item>
                <Menu.Item
                    key="27"
                    onClick={(e) => {
                        // handleSortAmount(e.key);
                    }}
                >
                    Des
                </Menu.Item>
            </SubMenu>
            <SubMenu title="Brand" key="brand">
                <Menu.Item
                    key="28"
                    onClick={(e) => {
                        // handleSortBrand(e.key);
                    }}
                >
                    Asc
                </Menu.Item>
                <Menu.Item
                    key="29"
                    onClick={(e) => {
                        // handleSortBrand(e.key);
                    }}
                >
                    Des
                </Menu.Item>
            </SubMenu>
        </Menu>
    );
    return (
        <>
            <Wrapper
                style={{
                    justifyContent: "right",
                    padding: "20px 0px 0px 0px",
                    display: "flex",
                    gap: "10px",
                    alignItems: "center",
                }}
            >
                {notFilter === true ? (
                    <Button
                        danger
                        type="text"
                        onClick={() => {
                            deleteFilter();
                        }}
                    >
                        Remove filter
                    </Button>
                ) : (
                    <></>
                )}

                <Dropdown overlay={sortMenu}>
                    <div
                        style={{
                            color: theme === "light" ? "blue" : "#9e81f5",
                            cursor: "pointer",
                            fontWeight: theme === "light" ? "normal" : "bolder",
                        }}
                        className="ant-dropdown-link"
                        onClick={(e) => e.preventDefault()}
                    >
                        Sort by <DownOutlined />
                    </div>
                </Dropdown>
                <Dropdown overlay={filter}>
                    <div
                        style={{
                            color: theme === "light" ? "blue" : "#9e81f5",
                            cursor: "pointer",
                            fontWeight: theme === "light" ? "normal" : "bolder",
                        }}
                        className="ant-dropdown-link"
                        onClick={(e) => e.preventDefault()}
                    >
                        Filter <DownOutlined />
                    </div>
                </Dropdown>
            </Wrapper>
            <Wrapper
                style={{
                    padding: "0px 0px 10px 0px",
                    display: "flex",
                    justifyContent: "right",
                    gap: "5px",
                }}
            >
                {temp2.map((value, i) => (
                    <Button type="primary">{value}</Button>
                ))}
            </Wrapper>
        </>
    );
};

export default Filter;
