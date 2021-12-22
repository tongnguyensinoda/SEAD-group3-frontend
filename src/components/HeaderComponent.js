import React from 'react'
import "./Header.css";

function HeaderComponent() {
    return (


 <div class="navbar">
    <a class="logo">
    <img style={{height:'70px',width:'100px'}} src="https://api.hatchwise.com/api/public/storage/assets/contests/entries/L989778-20180310072325.jpg" rounded/>
    </a>
    <a href="/">HOME</a>
    <div class="dropdown">
        <button class="dropbtn">SERVICE 
            <i class="fa fa-caret-down"></i>
        </button>
        <div class="dropdown-content">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
        </div>
    </div> 
    <a href="about"><i class="fa fa-user"></i>ABOUT</a>
    <a href="/signin"><i class="fa fa-phone"></i>CONTACT US</a>


</div> 

    )
}

export default HeaderComponent

