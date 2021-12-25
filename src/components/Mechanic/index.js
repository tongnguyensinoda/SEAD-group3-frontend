import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";

import { Table, Input, Button, Space, Modal } from "antd";
import { useState, useEffect } from "react";
import Highlighter from "react-highlight-words";
import { SearchOutlined, ExclamationCircleOutlined } from "@ant-design/icons";
import { Wrapper } from "./Mechanic.style";
import "./mechanic.css";
import styled from "styled-components";
import SubNav from "../SubNav";
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
        age: 32,
        address: "New York No. 1 Lake Park",
    },
    {
        key: "2",
        name: "Nam Black",
        age: 42,
        address: "London No. 1 Lake Park",
    },
    {
        key: "3",
        name: "Bao Green",
        age: 32,
        address: "Sidney No. 1 Lake Park",
    },
    {
        key: "4",
        name: "Uyen Red",
        age: 32,
        address: "London No. 2 Lake Park",
    },
    {
        key: "5",
        name: "Viet Brown",
        age: 32,
        address: "New York No. 1 Lake Park",
    },
    {
        key: "6",
        name: "Nam Black",
        age: 42,
        address: "London No. 1 Lake Park",
    },
    {
        key: "7",
        name: "Bao Green",
        age: 32,
        address: "Sidney No. 1 Lake Park",
    },
    {
        key: "8",
        name: "Uyen Red",
        age: 32,
        address: "London No. 2 Lake Park",
    },
    {
        key: "9",
        name: "Viet Brown",
        age: 32,
        address: "New York No. 1 Lake Park",
    },
    {
        key: "10",
        name: "Nam Black",
        age: 42,
        address: "London No. 1 Lake Park",
    },
    {
        key: "11",
        name: "Bao Green",
        age: 32,
        address: "Sidney No. 1 Lake Park",
    },
    {
        key: "12",
        name: "Uyen Red",
        age: 32,
        address: "London No. 2 Lake Park",
    },
];
const MechanicForm = () => {
    const [state, setState] = useState({
        searchText: "",
        searchedColumn: "",
    });
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
            sorter: (a, b) => a.name.length - b.name.length,
            ...getColumnSearchProps("name"),
        },
        {
            title: "Age",
            dataIndex: "age",
            key: "age",
            width: "20%",
            ...getColumnSearchProps("age"),
            sorter: (a, b) => a.age - b.age,
        },
        {
            title: "Address",
            dataIndex: "address",
            key: "address",
            ...getColumnSearchProps("address"),
            sorter: (a, b) => a.address.length - b.address.length,
            sortDirections: ["descend", "ascend"],
        },
    ];
    return (
        <>
            <SubNav content="Mechanic Form"></SubNav>

            <Wrapper className="mechanic-form-wrapper">
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
