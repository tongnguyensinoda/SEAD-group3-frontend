import React, { useState, useEffect } from "react";
import { Pagination } from "../Pagination/Pagination";
import { useParams, useNavigate } from "react-router-dom";
import SubNav from "../SubNav";
import "./CategoryService.css";
import { Spinner } from "react-bootstrap";
export default function CategoryService() {
    var url_string = window.location.href;
    var url = new URL(url_string);
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(
        url.searchParams.get("page") == null ? 1 : url.searchParams.get("page")
    );
    const [datasPerPage] = useState(4);
    const [totalData, setTotalData] = useState();
    // Define the product link
    const endPoint = `https://service-sead-group3.herokuapp.com/category/pagination?page=${currentPage - 1}`;

    const indexOfLastData = currentPage * datasPerPage;
    const indexOfFirstData = indexOfLastData - datasPerPage;
    // const currentDatas = data.slice(indexOfFirstData, indexOfLastData);

    // Set the current page of pagination
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
        navigate(`/categoryService?page=${pageNumber}`);
    };

    // Transfer the value by using the navigate function
    let navigate = useNavigate();

    // Read the product table
    useEffect(() => {
        fetch(endPoint)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setData(data.categories);
                setTotalData(data.totalCategories);
                setIsLoading(false);
            })
            .catch((error) => window.alert(error));
    }, [currentPage]);

    const service = (categoryId) => {
        navigate(`/service/${categoryId}`);
    };

    return (
        <>
            <SubNav content="Category Service"></SubNav>

            <div className="App">
                {isLoading ? (
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
                    <>
                        <div className="row">
                            {/* Print out all products */}
                            {data.map((el) => (
                                <div className="categoryColumn">
                                    <div className="card" key={el.categoryId}>
                                        <img
                                            src={el.urlImg}
                                            style={{
                                                height: "270px",
                                                width: "100%",
                                            }}
                                            rounded
                                        />
                                        <br />
                                        <p className="name">{el.type}</p>
                                        <button
                                            className="normalBtn"
                                            onClick={() => {
                                                service(el.categoryId);
                                                console.log(el);
                                            }}
                                        >
                                            All services
                                        </button>
                                    </div>
                                    <br />
                                </div>
                            ))}
                        </div>
                        <br />
                        {/* Create the pagination */}
                        <Pagination
                            datasPerPage={datasPerPage}
                            totalDatas={totalData}
                            paginate={paginate}
                            currentPage={currentPage}
                        />
                        <br />
                    </>
                )}
            </div>
        </>
    );
}
