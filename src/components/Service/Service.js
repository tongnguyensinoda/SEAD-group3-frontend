import React, { useState, useEffect } from "react";
import { Pagination } from '../Pagination/Pagination';
import { useParams, useNavigate } from 'react-router-dom';
import SubNav from "../SubNav";
import "./Service.css";

export default function Service(){
    const [data, setData] = useState([])
    const [service, setService] = useState([])
    const [checkState, setCheckState] = useState(0);

    const [currentPage, setCurrentPage] = useState(1);
    const [datasPerPage] = useState(3);

    const indexOfLastData = currentPage * datasPerPage;
    const indexOfFirstData = indexOfLastData - datasPerPage;
    const currentDatas = data.slice(indexOfFirstData, indexOfLastData);

    // Set the current page of pagination
    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    // Read the value by using the useParam function
    let {id} = useParams()

    // Transfer the value by using the navigate function
    let navigate = useNavigate();

    // Read the product information by categoryId
    useEffect(() => {
      fetch("http://localhost:8080/category/" + id,{
          method: 'GET',
          headers: {
              'Content-Type': 'application/json'
          }
          })
          .then(response => response.json())
          .then(data => setService(data));
    }, []);

    // Read the product information by productId
    if ((service.type != null) && (checkState == 0)){
      setCheckState(1);
      fetch("http://localhost:8080/service/type?request=" + service.type,{
          method: 'GET',
          headers: {
              'Content-Type': 'application/json'
          }
          })
          .then(response => response.json())
          .then(data => setData(data))
  }


    const booking = (serviceId) =>{
      navigate(`/bookingService/${serviceId}`);
    }

    return (
      <>
      <SubNav content="Service"></SubNav>
        <div className = "App">
          <div className="row">
            {/* Print out all products */}
            {currentDatas.map(el => (
              <div className="serviceColumn">
                <div className="card" key={el.serviceId}>
                  <p className="name">{el.name}</p>
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

