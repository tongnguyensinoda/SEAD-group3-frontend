import React, { useState, useEffect } from "react";
import { Pagination } from '../Pagination/Pagination';
import { useParams, useNavigate } from 'react-router-dom';

export default function Service(){
    const [data, setData] = useState([])

    const [currentPage, setCurrentPage] = useState(1);
    const [datasPerPage] = useState(5);

    const indexOfLastData = currentPage * datasPerPage;
    const indexOfFirstData = indexOfLastData - datasPerPage;
    const currentDatas = data.slice(indexOfFirstData, indexOfLastData);

    // Set the current page of pagination
    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    // Read the product table
    useEffect(() => {
      fetch("./temp.json")
        .then(response => response.json())
        .then(data => setData(data));
    });

    return (
        <div>
          <h1>All Products</h1>
          {/* Create the pagination */}
          <Pagination datasPerPage = {datasPerPage} totalDatas = {data.length} paginate = {paginate}/>
          <br />
        </div> 
      );
}

