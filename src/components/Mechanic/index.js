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
import axios from "axios";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
const { confirm } = Modal;
function showConfirm(confirmMessage, mode, acceptJob, finishJob, serviceTransId) {
    confirm({
        title: confirmMessage,
        icon: <ExclamationCircleOutlined />,
        content: "Some descriptions",
        okText: "Yes",
        onOk() {
            mode === "request" ? acceptJob(serviceTransId) : finishJob(serviceTransId);
        },
        onCancel() {
            console.log("Cancel");
        },
    });
}
const initialData = [
    // {
    //     key: "1",
    //     name: "Viet Brown",
    //     ServiceType: "a",
    //     address: "New York No. 1 Lake Park",
    // },
    // {
    //     key: "2",
    //     name: "Nam Black",
    //     ServiceType: "a",
    //     address: "London No. 1 Lake Park",
    // },
    // {
    //     key: "3",
    //     name: "Bao Green",
    //     ServiceType: "c",
    //     address: "Sidney No. 1 Lake Park",
    // },
    // {
    //     key: "4",
    //     name: "Uyen Red",
    //     ServiceType: "d",
    //     address: "London No. 2 Lake Park",
    // },
    // {
    //     key: "5",
    //     name: "Viet Brown",
    //     ServiceType: "e",
    //     address: "New York No. 1 Lake Park",
    // },
    // {
    //     key: "6",
    //     name: "Nam Black",
    //     ServiceType: "q",
    //     address: "London No. 1 Lake Park",
    // },
    // {
    //     key: "7",
    //     name: "Bao Green",
    //     ServiceType: "r",
    //     address: "Sidney No. 1 Lake Park",
    // },
    // {
    //     key: "8",
    //     name: "Uyen Red",
    //     ServiceType: "j",
    //     address: "London No. 2 Lake Park",
    // },
    // {
    //     key: "9",
    //     name: "Viet Brown",
    //     ServiceType: "s",
    //     address: "New York No. 1 Lake Park",
    // },
    // {
    //     key: "10",
    //     name: "Nam Black",
    //     ServiceType: "d",
    //     address: "London No. 1 Lake Park",
    // },
    // {
    //     key: "11",
    //     name: "Bao Green",
    //     ServiceType: "y",
    //     address: "Sidney No. 1 Lake Park",
    // },
    // {
    //     key: "12",
    //     name: "Uyen Red",
    //     ServiceType: "q",
    //     address: "London No. 2 Lake Park",
    // },
];
const MechanicForm = () => {
    const [state, setState] = useState({
        searchText: "",
        searchedColumn: "",
    });
    const antIcon = <LoadingOutlined style={{ fontSize: 150 }} spin />;
    const [isLoading, setIsLoading] = useState(true);
    const [mode, setMode] = useState("request");
    // const [searchInput, setSerchInput] = useState();
    const [data, setData] = useState(initialData);
    const [user, setUser] = useState({
        id: localStorage.getItem("id") ? localStorage.getItem("id") : 0,
    });
    const [currentTrans, setCurrentTrans] = useState();
    let searchInput;
    let confirmMessage;
    mode == "request"
        ? (confirmMessage = "Do you want to accept this job?")
        : (confirmMessage = "You have finished this job?");
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
    async function fetchData(param) {
        let fetchURL =
            mode === "request"
                ? `http://localhost:8080/servicetran/getrequestjob?mechanic=${user.id}`
                : `http://localhost:8080/servicetran/gettodojob?mechanic=${user.id}`;
        await axios
            .get(fetchURL)
            .then((res) => {
                setData(res.data);
                console.log(res.data);
                setIsLoading(false);
            })
            .catch((error) => window.alert(error));
    }
    useEffect(() => {
        fetchData();
    }, [mode, data]);
    const columns = [
        {
            title: "Transaction ID",
            dataIndex: "serviceTransId",
            key: "serviceTranId",
            width: "10%",
            // sorter: (a, b) => a.name.localeCompare(b.name),
            // ...getColumnSearchProps("customer"),
        },
        {
            title: "Customer",
            dataIndex: "customer",
            key: "customer",
            width: "30%",
            // sorter: (a, b) => a.name.localeCompare(b.name),
            // ...getColumnSearchProps("customer"),
        },
        {
            title: "Address",
            dataIndex: "address",
            key: "address",
            // ...getColumnSearchProps("address"),
            // sorter: (a, b) => a.address.localeCompare(b.address),
        },
        {
            title: "Phone",
            dataIndex: "phone",
            key: "phone",
            // ...getColumnSearchProps("address"),
            // sorter: (a, b) => a.address.localeCompare(b.address),
        },
        {
            title: "Service Name",
            dataIndex: "serviceName",
            key: "ServiceName",
            width: "20%",
            // sorter: (a, b) => a.ServiceName.localeCompare(b.ServiceName),
            // ...getColumnSearchProps("ServiceName"),
        },
        {
            title: "Start Date",
            dataIndex: "startDate",
            key: "startDate",
            width: "20%",
            // sorter: (a, b) => a.startDate.localeCompare(b.startDate),
            // ...getColumnSearchProps("startDate"),
        },
        {
            title: "Total Cost",
            dataIndex: "totalCost",
            key: "totalCost",
            width: "20%",
            // sorter: (a, b) => a.totalCost.localeCompare(b.totalCost),
            // ...getColumnSearchProps("totalCost"),
        },
    ];
    const acceptJob = async (serviceTransId) => {
        let fetchURL = `http://localhost:8080/servicetran/acceptjob/${serviceTransId}`;
        await axios
            .post(fetchURL, serviceTransId)
            .then((res) => {
                console.log(res);
                window.alert("Added successfully");
            })
            .catch((error) => window.alert(error));
    };
    const finishJob = async (serviceTransId) => {
        let fetchURL = `http://localhost:8080/servicetran/finishjob/${serviceTransId}`;
        await axios
            .post(fetchURL, serviceTransId)
            .then((res) => {
                console.log(res);
                window.alert("Job Finished");
            })
            .catch((error) => window.alert(error));
    };
    return (
        <>
            <SubNav content="Mechanic Form"></SubNav>

            <Wrapper className="mechanic-form-wrapper">
                <Header>
                    <div className="left">
                        <div className="name">Mechanic Job</div>
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
                {isLoading === true ? (
                    <Spin
                        indicator={antIcon}
                        style={{ textAlign: "center", width: "100%", marginBottom: "20px" }}
                    />
                ) : (
                    <Table
                        columns={columns}
                        dataSource={data}
                        onRow={(record, rowIndex) => {
                            return {
                                onClick: (event) => {
                                    showConfirm(
                                        confirmMessage,
                                        mode,
                                        acceptJob,
                                        finishJob,
                                        record.serviceTransId
                                    );
                                }, // click row
                            };
                        }}
                        pagination={{ pageSize: 10 }}
                    />
                )}
            </Wrapper>
        </>
    );
};

export default MechanicForm;
