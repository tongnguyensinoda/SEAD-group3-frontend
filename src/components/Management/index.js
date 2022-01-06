import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import axios from "axios";
import "antd/dist/antd.css";
// import "./index.css";
import { Menu, Switch, Divider } from "antd";
import { Pagination } from "antd";
import Filter from "../Filter";
import { Container, Spinner } from "react-bootstrap";
import { Navbar } from "../Navbar";
import ManagementCRUD from "../ManagementCRUD";
import { Wrapper } from "./Management.style";
import SubNav from "../SubNav";
import { useNavigate } from "react-router-dom";
const initialState = [];
function Management() {
    const [currentUser, setCurrentUser] = useState({});
    const [users, setUsers] = useState(initialState);
    const [isLoading, setIsLoading] = useState(true);
    const [theme, setTheme] = useState("light");
    const changeTheme = (value) => {
        setTheme(value ? "dark" : "light");
    };
    const [menuName, setMenuName] = useState("User Report");
    // const link = "https://my-app123sad.herokuapp.com/items/search?";
    // const link2 = "https://my-app123sad.herokuapp.com/items/";
    // const link4 = "https://my-app123sad.herokuapp.com/?";
    // const link3 = "https://my-app123sad.herokuapp.com/setUpDatabase";
    // let rawFilter;
    // // var url_string = window.location.href;
    // // var url = new URL(url_string);
    // rawFilter = {
    //     // keyword: url.searchParams.get("keyword"),
    //     // currentPage:
    //     //     url.searchParams.get("currentPage") == null
    //     //         ? 1
    //     //         : parseInt(url.searchParams.get("currentPage")),
    //     // sortType: url.searchParams.get("sortType"),
    //     // order: url.searchParams.get("order"),
    //     // type: url.searchParams.get("type"),
    //     // brand: url.searchParams.get("brand"),
    // };
    // // console.log(c);
    const [filters, setFilters] = useState({
        currentPage: 1,
        keyword: "",
        sortType: "",
        order: "",
        type: "",
        brand: "",
    });
    const [pagination, setPagination] = useState({
        total: 4,
        pageSize: 10,
    });
    let navigate = useNavigate();
    // let sort;
    // const handleSortID = (key) => {
    //     if (isEven(key)) {
    //         sort = "acs";
    //     } else {
    //         sort = "des";
    //     }
    //     let obj = {
    //         ...filters,
    //         order: sort,
    //         sortType: "id",
    //     };
    //     console.log(obj);
    //     obj = queryString.stringify(obj);
    //     console.log(obj);
    //     window.location.href = link4 + obj;
    // };
    // const handleSortName = (key) => {
    //     if (isEven(key)) {
    //         sort = "acs";
    //     } else {
    //         sort = "des";
    //     }
    //     let obj = {
    //         ...filters,
    //         order: sort,
    //         sortType: "name",
    //         currentPage: 1,
    //     };
    //     console.log(obj);
    //     obj = queryString.stringify(obj);
    //     console.log(obj);
    //     window.location.href = link4 + obj;
    // };
    // const handleSortAmount = (key) => {
    //     if (isEven(key)) {
    //         sort = "acs";
    //     } else {
    //         sort = "des";
    //     }
    //     let obj = {
    //         ...filters,
    //         order: sort,
    //         sortType: "amount",
    //         currentPage: 1,
    //     };
    //     console.log(obj);
    //     obj = queryString.stringify(obj);
    //     console.log(obj);
    //     window.location.href = link4 + obj;
    // };
    // const handleSortPrice = (key) => {
    //     if (isEven(key)) {
    //         sort = "acs";
    //     } else {
    //         sort = "des";
    //     }
    //     let obj = {
    //         ...filters,
    //         order: sort,
    //         sortType: "price",
    //         currentPage: 1,
    //     };
    //     console.log(obj);
    //     obj = queryString.stringify(obj);
    //     console.log(obj);
    //     window.location.href = link4 + obj;
    // };
    // const handleSortBrand = (key) => {
    //     if (isEven(key)) {
    //         sort = "acs";
    //     } else {
    //         sort = "des";
    //     }
    //     let obj = {
    //         ...filters,
    //         order: sort,
    //         sortType: "brand",
    //         currentPage: 1,
    //     };
    //     console.log(obj);
    //     obj = queryString.stringify(obj);
    //     console.log(obj);
    //     window.location.href = link4 + obj;
    // };
    // const handleSortType = (key) => {
    //     let obj;
    //     console.log(key);
    //     if (key === "shoes" || key === "clothes" || key === "phone") {
    //         obj = { ...filters, brand: "", type: key, currentPage: 1 };
    //         obj = queryString.stringify(obj);
    //         window.location.href = link4 + obj;
    //     } else if (key === "adidas" || key === "nike" || key === "puma" || key === "new balance") {
    //         obj = { ...filters, brand: key, type: "shoes", currentPage: 1 };
    //         obj = queryString.stringify(obj);
    //         window.location.href = link4 + obj;
    //     } else if (key === "gucci" || key === "fendi") {
    //         obj = { ...filters, brand: key, type: "clothes", currentPage: 1 };
    //         obj = queryString.stringify(obj);
    //         window.location.href = link4 + obj;
    //     } else if (key === "iphone" || key === "samsung" || key === "xiaomi" || key === "huwei") {
    //         obj = { ...filters, brand: key, type: "phone", currentPage: 1 };
    //         obj = queryString.stringify(obj);
    //         window.location.href = link4 + obj;
    //     }
    // };
    // function isEven(n) {
    //     return n % 2 === 0;
    // }
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
        // console.log(id);
        // await axios
        //     .delete(link2 + id)
        //     .then((res) => {
        //         fetchData();
        //         window.alert("Delete item successfully");
        //     })
        //     .catch((error) => window.alert(error));
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
        // let obj = {
        //     ...filters,
        //     currentPage: page,
        // };
        // console.log(page);
        setFilters({ ...filters, currentPage: page });
        // obj = queryString.stringify(obj);
        // window.location.href = link4 + obj;
        // console.log(filters.currentPage);
        navigate(`/management?role=${menuName}?page=${page}`);
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
        let temp = {
            keyword: null,
            currentPage: 1,
            sortType: null,
            order: null,
            type: null,
            brand: null,
        };
        setFilters(temp);
        // let obj = temp;
        // obj = queryString.stringify(obj);
        // window.location.href = link4 + obj;
    };
    async function fetchData(param) {
        let fetchURL =
            menuName === "customer"
                ? `http://localhost:8080/auth/getall?role=customer&page=${filters.currentPage - 1}`
                : `http://localhost:8080/auth/getall?role=mechanic&page=${filters.currentPage - 1}`;
        await axios
            .get(fetchURL)
            .then((res) => {
                console.log(res.data);
                setUsers(res.data.users);
                setIsLoading(false);
                setPagination({ ...pagination, total: res.data.totalUser });
            })
            .catch((error) => window.alert(error));
    }
    useEffect(() => {
        fetchData();
    }, [menuName, filters.currentPage]);

    // useEffect(() => {
    //     let paramString2 = queryString.stringify(filters);
    //     console.log("hello");
    //     axios
    //         .get(`http://localhost:8080/items/search?` + paramString2)
    //         .then((res) => {

    //             setIsLoading(false);
    //         })
    //         .catch((error) => window.alert(error));
    // }, []);

    return (
        <>
            <SubNav content="Management"></SubNav>

            {isLoading === true ? (
                <div
                    style={{
                        textAlign: "center",
                        padding: "200px 0px",
                    }}
                >
                    <Spinner
                        animation="border"
                        role="status"
                        style={{ width: "200px", height: "200px" }}
                    >
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </div>
            ) : (
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
                        ></Navbar>
                    </div>
                    <Container fluid>
                        <Filter
                            theme={theme}
                            // handleSortID={handleSortID}
                            // handleSortName={handleSortName}
                            // handleSortAmount={handleSortAmount}
                            // handleSortPrice={handleSortPrice}
                            // handleSortBrand={handleSortBrand}
                            // handleSortType={handleSortType}
                            deleteFilter={deleteFilter}
                            filters={filters}
                        />
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
                        ></ManagementCRUD>
                        <Pagination
                            current={filters.currentPage}
                            total={pagination.total}
                            pageSize={pagination.pageSize}
                            onChange={pageOnChange}
                            style={{ textAlign: "right" }}
                        />
                    </Container>

                    {/* <Wrapper style={{ padding: "15px 0px", textAlign: "right" }}>
                       
                    </Wrapper> */}
                </Wrapper>
            )}
        </>
    );
}

export default Management;
