import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import axios from "axios";
import "antd/dist/antd.css";
// import "./index.css";
import { Menu, Switch, Divider, Input, Space } from "antd";
import { Pagination, Button } from "antd";
import Filter from "../Filter";
import { Container, Spinner, Table, Modal, Col, Row, Form } from "react-bootstrap";
import { Navbar } from "../Navbar";
import ManagementCRUD from "../ManagementCRUD";
import { Wrapper } from "./Management.style";
import SubNav from "../SubNav";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useFormik } from "formik";
const initialState = [];
const phoneRegex = "(84|0[3|5|7|8|9])+([0-9]{8})";
const userSchema = yup.object().shape({
    name: yup.string().required(),
    address: yup.string().required(),
    email: yup.string().email().required(),
    phone: yup.string().matches(phoneRegex, "Phone number is invalid"),
    type: yup.string().required(),
});
const serviceSchema = yup.object().shape({
    name: yup.string().required(),
    cost: yup.string().required(),
    rating: yup.number().required(),
    type: yup.string().required(),
});
function Management() {
    var url_string = window.location.href;
    var url = new URL(url_string);
    const { Search } = Input;
    const [currentUser, setCurrentUser] = useState({});
    const [users, setUsers] = useState(initialState);
    const [isLoading, setIsLoading] = useState(true);
    const [theme, setTheme] = useState("light");
    const [editModalShow, setEditModalShow] = useState(false);

    const changeTheme = (value) => {
        setTheme(value ? "dark" : "light");
    };
    const [searchValue, setSearchValue] = useState(
        url.searchParams.get("keyword") == null ? "" : url.searchParams.get("keyword")
    );
    const [menuName, setMenuName] = useState(
        url.searchParams.get("role") == null ? "serviceTran" : url.searchParams.get("role")
    );
    const [filters, setFilters] = useState({
        currentPage:
            url.searchParams.get("page") == null ? 1 : parseInt(url.searchParams.get("page")),
        sort: url.searchParams.get("sort") == null ? "" : url.searchParams.get("sort"),
        search: url.searchParams.get("keyword") == null ? "" : url.searchParams.get("keyword"),
        // role: url.searchParams.get("role") == null ? "serviceTran" : url.searchParams.get("role"),
    });
    const onSearch = async (value) => {
        setFilters({ ...filters, currentPage: 1, sort: "", search: value });
        navigate(`/management?role=${menuName}&page=0&keyword=${searchValue}&sort=${filters.sort}`);
    };
    const [pagination, setPagination] = useState({
        total: 4,
        pageSize: 5,
    });
    let searchPlaceHolder;
    if (menuName == "serviceTran") {
        searchPlaceHolder = "Search by id";
    } else {
        searchPlaceHolder = "Search by name";
    }
    let navigate = useNavigate();
    const handleSortID = (key) => {
        if (isEven(key)) {
            if (menuName == "serviceTran") {
                setFilters({ ...filters, sort: "serviceTransId,asc" });
                navigate(
                    `/management?role=${menuName}&page=${filters.currentPage}&sort=serviceTransId,asc`
                );
            } else if (menuName == "customer" || menuName == "mechanic") {
                setFilters({ ...filters, sort: "id,asc" });
                navigate(`/management?role=${menuName}&page=${filters.currentPage}&sort=id,asc`);
            } else {
                setFilters({ ...filters, sort: "serviceId,asc" });
                navigate(
                    `/management?role=${menuName}&page=${filters.currentPage}&sort=serviceId,asc`
                );
            }
        } else {
            if (menuName == "serviceTran") {
                setFilters({ ...filters, sort: "serviceTransId,desc" });
                navigate(
                    `/management?role=${menuName}&page=${filters.currentPage}&sort=serviceTransId,desc`
                );
            } else if (menuName == "customer" || menuName == "mechanic") {
                setFilters({ ...filters, sort: "id,desc" });
                navigate(`/management?role=${menuName}&page=${filters.currentPage}&sort=id,desc`);
            } else {
                setFilters({ ...filters, sort: "serviceId,desc" });
                navigate(
                    `/management?role=${menuName}&page=${filters.currentPage}&sort=service,asc`
                );
            }
        }
    };
    const handleSortName = (key) => {
        if (isEven(key)) {
            if (menuName == "serviceTran") {
                setFilters({ ...filters, sort: "serviceTransName,asc" });
                navigate(
                    `/management?role=${menuName}&page=${filters.currentPage}&sort=serviceTransName,asc`
                );
            } else if (menuName == "customer" || menuName == "mechanic") {
                setFilters({ ...filters, sort: "name,asc" });
                navigate(`/management?role=${menuName}&page=${filters.currentPage}&sort=name,asc`);
            } else {
                setFilters({ ...filters, sort: "serviceId,asc" });
                navigate(
                    `/management?role=${menuName}&page=${filters.currentPage}&sort=serviceId,asc`
                );
            }
        } else {
            if (menuName == "serviceTran") {
                setFilters({ ...filters, sort: "serviceTransName,desc" });
                navigate(
                    `/management?role=${menuName}&page=${filters.currentPage}&sort=serviceTransName,desc`
                );
            } else if (menuName == "customer" || menuName == "mechanic") {
                setFilters({ ...filters, sort: "name,desc" });
                navigate(`/management?role=${menuName}&page=${filters.currentPage}&sort=name,desc`);
            } else {
                setFilters({ ...filters, sort: "serviceId,desc" });
                navigate(
                    `/management?role=${menuName}&page=${filters.currentPage}&sort=serviceId,desc`
                );
            }
        }
    };
    const handleSortEmail = (key) => {
        if (isEven(key)) {
            if (menuName == "serviceTran") {
                setFilters({ ...filters, sort: "serviceTransEmail,asc" });
                navigate(
                    `/management?role=${menuName}&page=${filters.currentPage}&sort=serviceTransEmail,asc`
                );
            } else {
                setFilters({ ...filters, sort: "email,asc" });
                navigate(`/management?role=${menuName}&page=${filters.currentPage}&sort=email,asc`);
            }
        } else {
            if (menuName == "serviceTran") {
                setFilters({ ...filters, sort: "serviceTransName,desc" });
                navigate(
                    `/management?role=${menuName}&page=${filters.currentPage}&sort=serviceTransEmail,desc`
                );
            } else {
                setFilters({ ...filters, sort: "email,desc" });
                navigate(
                    `/management?role=${menuName}&page=${filters.currentPage}&sort=email,desc`
                );
            }
        }
    };
    const handleSortAddress = (key) => {
        if (isEven(key)) {
            if (menuName == "serviceTran") {
                setFilters({ ...filters, sort: "serviceTransAddress,asc" });
                navigate(
                    `/management?role=${menuName}&page=${filters.currentPage}&sort=serviceTransAddress,asc`
                );
            } else {
                setFilters({ ...filters, sort: "address,asc" });
                navigate(
                    `/management?role=${menuName}&page=${filters.currentPage}&sort=address,asc`
                );
            }
        } else {
            if (menuName == "serviceTran") {
                setFilters({ ...filters, sort: "serviceTransAddress,desc" });
                navigate(
                    `/management?role=${menuName}&page=${filters.currentPage}&sort=serviceTransAddress,desc`
                );
            } else {
                setFilters({ ...filters, sort: "address,desc" });
                navigate(
                    `/management?role=${menuName}&page=${filters.currentPage}&sort=address,desc`
                );
            }
        }
    };
    function isEven(n) {
        return n % 2 === 0;
    }
    // const handleAddItem = (newItem) => {
    //     newItem.id = items.length + 1;
    //     setUsers([...items, newItem]);
    //     axios
    //         .post(link2, newItem)
    //         .then((res) => {
    //             fetchData();
    //             window.alert("Add item successfully");
    //         })
    //         .catch((error) => window.alert("All value should not be null"));
    // };
    const deleteUser = async (id) => {
        setUsers(users.filter((user) => user.id !== id));
        await axios
            .delete(`http://localhost:8080/auth/${id}`)
            .then((res) => {
                window.alert("Delete succesfully");
            })
            .catch((error) => window.alert(error));
    };
    const editRow = (user) => {
        setCurrentUser(user);
    };

    const updatedUser = async (user, updatedUser) => {
        setUsers(users.map((user) => (user.id === user ? updatedUser : user)));
        // await axios
        //     .put(link2, updatedItem)
        //     .then((res) => {
        //         fetchData();
        //         window.alert("Update item successfully");
        //     })
        //     .catch((error) => window.alert(error));
    };
    const pageOnChange = (page) => {
        setFilters({ ...filters, currentPage: page, search: searchValue, sort: filters.sort });
        navigate(
            `/management?role=${menuName}&page=${page}&keyword=${searchValue}&sort=${filters.sort}`
        );
    };
    // const handleSearchButton = async (name) => {
    //     let obj = {
    //         ...filters,
    //         keyword: name,
    //         currentPage: 1,
    //     };
    //     obj = queryString.stringify(obj);
    //     await axios
    //         .get(link + obj)
    //         .then((res) => {
    //             setUsers(res.data);
    // setPagination({ ...pagination, total: 2 });
    //             setFilters({ ...filters, keyword: name });
    //             window.location.href = link4 + obj;
    //         })
    //         .catch((error) => window.alert(error));
    // };
    const deleteFilter = () => {
        setFilters({ ...filters, currentPage: 1, sort: "", search: "" });
        navigate(`/management?role=${menuName}`);
    };
    const handleSearch = (event) => {
        setSearchValue(event.target.value);
    };
    async function fetchData(param) {
        let fetchURL =
            menuName === "serviceTran"
                ? `http://localhost:8080/servicetran?page=${filters.currentPage - 1}&sort=${
                      filters.sort
                  }&keyword=${filters.search}`
                : menuName === "service"
                ? `http://localhost:8080/service?page=${filters.currentPage - 1}&sort=${
                      filters.sort
                  }&keyword=${filters.search}`
                : `http://localhost:8080/auth/getall?role=${menuName}&page=${
                      filters.currentPage - 1
                  }&sort=${filters.sort}&keyword=${filters.search}`;
        await axios
            .get(fetchURL)
            .then((res) => {
                console.log(res.data);
                console.log(filters);
                menuName === "serviceTran"
                    ? setUsers(res.data.serviceTrans)
                    : menuName === "service"
                    ? setUsers(res.data.services)
                    : setUsers(res.data.users);
                setIsLoading(false);
                setPagination({
                    ...pagination,
                    total:
                        menuName === "serviceTran"
                            ? res.data.totalServiceTrans
                            : menuName == "service"
                            ? res.data.totalServices
                            : res.data.totalUser,
                });
            })
            .catch((error) => window.alert(error));
    }
    const addUser = async (item) => {
        const valid =
            menuName === "mechanic"
                ? await userSchema.isValid(item)
                : await serviceSchema.isValid(item);
        if (valid) {
            let fetchURL =
                menuName === "mechanic"
                    ? "http://localhost:8080/auth/addmechanic"
                    : "http://localhost:8080/service";
            console.log(fetchURL);
            await axios
                .post(fetchURL, item)
                .then((res) => {
                    console.log("hello");
                    window.alert("Added successfully");
                })
                .catch((error) => window.alert(error));
        } else {
            if (menuName === "mechanic") {
                if (item.name == null || item.name.length < 1) {
                    window.alert("Name is required");
                }
                if (item.address == null || item.address.length < 1) {
                    window.alert("Address is required");
                }
                if (item.email == null || item.email.length < 1) {
                    window.alert("Email is required");
                }
                if (item.phone == null || item.phone.length < 1) {
                    window.alert("Phone is required");
                }
                if (item.type == null || item.type.length < 1) {
                    window.alert("Type is required");
                }
            } else if (menuName == "service") {
                if (item.name == null || item.name.length < 1) {
                    window.alert("Name is required");
                }
                if (item.cost == null || !Number.isInteger(parseInt(item.cost))) {
                    window.alert("Cost is required and must be number");
                }
                if (item.type == null || item.type.length < 1) {
                    window.alert("Type is required");
                }
            }
        }
    };
    useEffect(() => {
        fetchData();
    }, [menuName, filters]);
    return (
        <>
            <SubNav content="Management"></SubNav>

            <Wrapper
                background={theme === "light" ? "white" : "#001529"}
                color={theme === "light" ? "#001529" : "white"}
                backgroundPage={theme === "light" ? "white" : "#9e81f5"}
                textPage={theme === "light" ? "black" : "white"}
                activePage={theme === "light" ? "white" : "#6638f1"}
                borderPage={theme === "light" ? "1px solid blue" : "none"}
            >
                <div>
                    <Navbar
                        changeTheme={changeTheme}
                        theme={theme}
                        menuName={menuName}
                        setMenuName={setMenuName}
                        setFilters={setFilters}
                        filters={filters}
                        setSearchValue={setSearchValue}
                        setIsLoading={setIsLoading}
                    ></Navbar>
                </div>
                {isLoading === true ? (
                    <div
                        style={{
                            textAlign: "center",
                            padding: "200px 0px",
                            zIndex: "999",
                            width: "100%",
                        }}
                    >
                        <Spinner
                            animation="border"
                            role="status"
                            style={{ width: "200px", height: "200px", color: "black" }}
                        >
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                    </div>
                ) : (
                    <Container fluid>
                        <div className="searchAndFilterWrapper">
                            {menuName === "service" || menuName === "mechanic" ? (
                                <Button
                                    type="primary"
                                    onClick={() => {
                                        setEditModalShow(true);
                                    }}
                                    style={{ color: theme === "light" ? "black" : "white" }}
                                    className="add-button"
                                >
                                    Add
                                </Button>
                            ) : (
                                ""
                            )}

                            <Search
                                style={{ width: "40%" }}
                                placeholder={searchPlaceHolder}
                                onSearch={onSearch}
                                enterButton
                                value={searchValue}
                                onChange={handleSearch}
                            />
                            <Filter
                                theme={theme}
                                handleSortID={handleSortID}
                                handleSortName={handleSortName}
                                handleSortEmail={handleSortEmail}
                                handleSortAddress={handleSortAddress}
                                // handleSortBrand={handleSortBrand}
                                // handleSortType={handleSortType}
                                deleteFilter={deleteFilter}
                                filters={filters}
                                menuName={menuName}
                                setSearchValue={setSearchValue}
                            />
                        </div>

                        <ManagementCRUD
                            users={users}
                            deleteUser={deleteUser}
                            editRow={editRow}
                            currentUser={currentUser}
                            updatedUser={updatedUser}
                            changeTheme={changeTheme}
                            theme={theme}
                            currentPage={filters.currentPage}
                            pageSize={pagination.pageSize}
                            menuName={menuName}
                            setMenuName={setMenuName}
                            addUser={addUser}
                        ></ManagementCRUD>
                        <Pagination
                            current={filters.currentPage}
                            total={pagination.total}
                            pageSize={pagination.pageSize}
                            onChange={pageOnChange}
                            style={{ textAlign: "right" }}
                            showSizeChanger={false}
                        />
                    </Container>
                )}
                {/* <Wrapper style={{ padding: "15px 0px", textAlign: "right" }}>
                       
                    </Wrapper> */}
                <EditModal
                    show={editModalShow}
                    onHide={() => setEditModalShow(false)}
                    // handleInputChange={handleInputChange}
                    // setItem={setItem}
                    currentUser={currentUser}
                    updatedUser={updatedUser}
                    menuName={menuName}
                    addUser={addUser}
                />
            </Wrapper>
        </>
    );
}
function EditModal(props) {
    const [category, setCategory] = useState([
        {
            type: "",
        },
    ]);
    const [item, setItem] = useState(
        props.menuName === "mechanic" ? { password: 123, jobCount: 0 } : { rating: 0 }
    );
    const fetch = async () => {
        await axios
            .get("http://localhost:8080/category")
            .then((res) => {
                setCategory(res.data);
            })
            .catch((error) => window.alert(error));
    };
    useEffect(() => {
        fetch();
    }, [props]);
    const handleUpdate = () => {
        console.log(item);
        props.addUser(item);
        setItem(props.menuName === "mechanic" ? { password: 123, jobCount: 0 } : { rating: 0 });
        props.onHide();
    };
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setItem({ ...item, [name]: value });
    };
    return (
        <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {" "}
                    {props.menuName === "mechanic" ? "Add Mechanic" : "Add Service"}
                </Modal.Title>
            </Modal.Header>
            <Form>
                <Modal.Body>
                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                        <Form.Label column sm={2}>
                            {props.menuName === "mechanic" ? "Mechanic Name" : "Service Name"}
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control
                                type=""
                                placeholder=""
                                name="name"
                                onChange={handleInputChange}
                            />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                        <Form.Label column sm={2}>
                            {props.menuName === "mechanic" ? "Address" : "Cost"}
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control
                                type=""
                                placeholder=""
                                name={props.menuName === "mechanic" ? "address" : "cost"}
                                onChange={handleInputChange}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                        <Form.Label column sm={2}>
                            {props.menuName === "mechanic" ? "Email" : "Type"}
                        </Form.Label>
                        <Col sm={10}>
                            {props.menuName === "mechanic" ? (
                                <>
                                    <Form.Control
                                        type=""
                                        placeholder=""
                                        name="email"
                                        onChange={handleInputChange}
                                    />
                                </>
                            ) : (
                                <>
                                    <select name="type" id="category" onChange={handleInputChange}>
                                        <option value="default" disabled selected>
                                            Choose Type
                                        </option>
                                        {category.map((item, index) => (
                                            <option value={item.type}>{item.type}</option>
                                        ))}
                                    </select>
                                </>
                            )}
                        </Col>
                    </Form.Group>
                    {props.menuName === "mechanic" ? (
                        <>
                            <Form.Group
                                as={Row}
                                className="mb-3"
                                controlId="formHorizontalPassword"
                            >
                                <Form.Label column sm={2}>
                                    Phone
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Control
                                        type=""
                                        placeholder=""
                                        name="phone"
                                        onChange={handleInputChange}
                                    />
                                </Col>
                            </Form.Group>
                            <Form.Group
                                as={Row}
                                className="mb-3"
                                controlId="formHorizontalPassword"
                            >
                                <Form.Label column sm={2}>
                                    Type
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Control
                                        type=""
                                        placeholder=""
                                        name="type"
                                        onChange={handleInputChange}
                                    />
                                </Col>
                            </Form.Group>
                        </>
                    ) : (
                        ""
                    )}
                </Modal.Body>

                <Modal.Footer>
                    <Button onClick={handleUpdate}>Add</Button>
                    <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Form>
        </Modal>
    );
}
export default Management;
