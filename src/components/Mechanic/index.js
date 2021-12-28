import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";

import { Table, Input, Button, Space, Modal } from "antd";
import { useState, useEffect } from "react";
import Highlighter from "react-highlight-words";
import { SearchOutlined, ExclamationCircleOutlined } from "@ant-design/icons";
import { Header, Wrapper } from "./Mechanic.style";
import "./mechanic.css";
import styled from "styled-components";
import SubNav from "../SubNav";
import ButtonGroup from "antd/lib/button/button-group";
const { confirm } = Modal;
function showConfirm() {
    confirm({
        title: "Do you Want to accept this job?",
        icon: <ExclamationCircleOutlined />,
        content: "Some descriptions",
        onOk() {
            console.log("OK");
        },
        onCancel() {
            console.log("Cancel");
        },
    });
}
const data = [
    {
        key: "1",
        name: "Viet Brown",
        ServiceType: "a",
        address: "New York No. 1 Lake Park",
    },
    {
        key: "2",
        name: "Nam Black",
        ServiceType: "a",
        address: "London No. 1 Lake Park",
    },
    {
        key: "3",
        name: "Bao Green",
        ServiceType: "c",
        address: "Sidney No. 1 Lake Park",
    },
    {
        key: "4",
        name: "Uyen Red",
        ServiceType: "d",
        address: "London No. 2 Lake Park",
    },
    {
        key: "5",
        name: "Viet Brown",
        ServiceType: "e",
        address: "New York No. 1 Lake Park",
    },
    {
        key: "6",
        name: "Nam Black",
        ServiceType: "q",
        address: "London No. 1 Lake Park",
    },
    {
        key: "7",
        name: "Bao Green",
        ServiceType: "r",
        address: "Sidney No. 1 Lake Park",
    },
    {
        key: "8",
        name: "Uyen Red",
        ServiceType: "j",
        address: "London No. 2 Lake Park",
    },
    {
        key: "9",
        name: "Viet Brown",
        ServiceType: "s",
        address: "New York No. 1 Lake Park",
    },
    {
        key: "10",
        name: "Nam Black",
        ServiceType: "d",
        address: "London No. 1 Lake Park",
    },
    {
        key: "11",
        name: "Bao Green",
        ServiceType: "y",
        address: "Sidney No. 1 Lake Park",
    },
    {
        key: "12",
        name: "Uyen Red",
        ServiceType: "q",
        address: "London No. 2 Lake Park",
    },
];
const MechanicForm = () => {
    const [state, setState] = useState({
        searchText: "",
        searchedColumn: "",
    });
    const [mode, setMode] = useState("request");
    // const [searchInput, setSerchInput] = useState();
    let searchInput;
    const getColumnSearchProps = (dataIndex) => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
            <div style={{ padding: 8 }}>
                <Input
                    ref={(node) => {
                        searchInput = node;
                    }}
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
                    style={{ marginBottom: 8, display: "block" }}
                />
                <Space>
                    <Button
                        type="primary"
                        onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
                        icon={<SearchOutlined />}
                        size="small"
                        style={{ width: 90 }}
                    >
                        Search
                    </Button>
                    <Button
                        onClick={() => handleReset(clearFilters)}
                        size="small"
                        style={{ width: 90 }}
                    >
                        Reset
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            confirm({ closeDropdown: false });
                            setState({
                                searchText: selectedKeys[0],
                                searchedColumn: dataIndex,
                            });
                        }}
                    >
                        Filter
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: (filtered) => (
            <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />
        ),
        onFilter: (value, record) =>
            record[dataIndex]
                ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase())
                : "",
        onFilterDropdownVisibleChange: (visible) => {
            if (visible) {
                setTimeout(() => searchInput.select(), 100);
            }
        },
        return: (text) =>
            state.searchedColumn === dataIndex ? (
                <Highlighter
                    highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
                    searchWords={[this.state.searchText]}
                    autoEscape
                    textToHighlight={text ? text.toString() : ""}
                />
            ) : (
                text
            ),
    });

    const handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        setState({
            searchText: selectedKeys[0],
            searchedColumn: dataIndex,
        });
    };

    const handleReset = (clearFilters) => {
        clearFilters();
        setState({ searchText: "" });
    };

    const columns = [
        {
            title: "Name",
            dataIndex: "name",
            key: "name",
            width: "30%",
            sorter: (a, b) => a.name.localeCompare(b.name),
            ...getColumnSearchProps("name"),
        },

        {
            title: "Address",
            dataIndex: "address",
            key: "address",
            ...getColumnSearchProps("address"),
            sorter: (a, b) => a.address.localeCompare(b.address),
        },
        {
            title: "Service Type",
            dataIndex: "ServiceType",
            key: "ServiceType",
            width: "20%",
            sorter: (a, b) => a.ServiceType.localeCompare(b.ServiceType),
            ...getColumnSearchProps("ServiceType"),
        },
    ];
    return (
        <>
            <SubNav content="Mechanic Form"></SubNav>
            <Wrapper className="mechanic-form-wrapper">
                <Header>
                    <div className="left">
                        <div className="name">Mechanic</div>
                    </div>
                    <div className="right">
                        <Button
                            type={mode == "request" ? "primary" : "default"}
                            onClick={() => {
                                setMode("request");
                            }}
                        >
                            Request
                        </Button>
                        <Button
                            type={mode == "todo" ? "primary" : "default"}
                            onClick={() => {
                                setMode("todo");
                            }}
                        >
                            Todo
                        </Button>
                    </div>
                </Header>
                <Table
                    columns={columns}
                    dataSource={data}
                    onRow={(record, rowIndex) => {
                        return {
                            onClick: (event) => {
                                showConfirm();
                            }, // click row
                        };
                    }}
                    pagination={{ pageSize: 10 }}
                />
            </Wrapper>
        </>
    );
};

export default MechanicForm;
