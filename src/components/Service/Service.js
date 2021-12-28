import React, { useState, useEffect } from "react";
import { Pagination } from '../Pagination/Pagination';
import { useParams, useNavigate } from 'react-router-dom';
import SubNav from "../SubNav";
import "./Service.css";

export default function Service(){
    const [data, setData] = useState([])

    const [currentPage, setCurrentPage] = useState(1);
    const [datasPerPage] = useState(6);

    // Define the product link
    const endPoint = "http://localhost:8080/service"

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
    });

    const booking = (serviceId) =>{
      navigate(`/bookingService/${serviceId}`);
      console.log(serviceId)
    }

    return (
      <>
      <SubNav content="Service"></SubNav>
        <div className = "App">
          <div className="row">
            {/* Print out all products */}
            {currentDatas.map(el => (
              <div className="column">
                <div className="card" key={el.serviceId}>
                  <p className="productName">{el.name}</p>
                  <p className="price">{el.cost} VND</p>
                  <p className="rating">{el.rating}*</p>
                  <button className = "normalBtn" onClick={()=> booking(el.serviceId)}>Booking</button>
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

