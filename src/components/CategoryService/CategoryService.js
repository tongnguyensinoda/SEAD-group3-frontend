import React, { useState, useEffect } from "react";
import { Pagination } from '../Pagination/Pagination';
import { useParams, useNavigate } from 'react-router-dom';
import SubNav from "../SubNav";
import "./CategoryService.css";

export default function CategoryService(){
    const [data, setData] = useState([])

    const [currentPage, setCurrentPage] = useState(1);
    const [datasPerPage] = useState(4);

    // Define the product link
    const endPoint = "http://localhost:8080/category"

    const indexOfLastData = currentPage * datasPerPage;
    const indexOfFirstData = indexOfLastData - datasPerPage;
    const currentDatas = data.slice(indexOfFirstData, indexOfLastData);

    // Set the current page of pagination
    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    // Transfer the value by using the navigate function
    let navigate = useNavigate();

    // Read the product table
    useEffect(() => {
      fetch(endPoint)
        .then(response => response.json())
        .then(data => setData(data));
    }, []);

    const service = (categoryId) =>{
      navigate(`/service/${categoryId}`);
    }

    return (
      <>
      <SubNav content="Category Service"></SubNav>
        <div className = "App">
          <div className="row">
            {/* Print out all products */}
            {currentDatas.map(el => (
              <div className="categoryColumn">
                <div className="card" key={el.categoryId}>
                    <img 
                    src={el.urlImg}
                    style={{
                      height:'270px',
                      width: '100%',
                      }}rounded/>
                      <br/>
                    <p className="name">{el.type}</p>
                    <button className = "normalBtn" onClick={()=> service(el.categoryId)}>all services</button>
                </div>
                <br/>
              </div>
              ))}
          </div>
          <br />
          {/* Create the pagination */}
          <Pagination datasPerPage = {datasPerPage} totalDatas = {data.length} paginate = {paginate}/>
          <br />
        </div> 
        </>
      );
}

