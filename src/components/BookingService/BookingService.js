import React, { useState, useEffect } from "react";
import { useParams} from 'react-router-dom'
import "./BookingService.css";
import SubNav from "../SubNav";
import {useForm} from "react-hook-form"


export default function BookingService() {
    const [data, setData] = useState([])
    const [pastedData, setPastedData] = useState([])

    // Read the value by using the useParam function
    let {id} = useParams()

    const {register, handleSubmit, formState: { errors }, reset, trigger} = useForm();

    // Read the product information by productId
    useEffect(() => {
        fetch(`http://localhost:8080/service/${id}`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
            })
            .then(response => response.json())
            .then(data => setPastedData(data));
    }, []);

    // Submit the input product
    const onSubmit = (data) => {
        console.log(data);
        reset();
    }

    return (
        <>
            <SubNav content="Booking Service"></SubNav>
            <section className="section2">
                <div className = "content3">
                    <h2>{pastedData.name}</h2>
                    <span></span>
                    <p>Price: {pastedData.cost}</p>
                    <p>Rating: {pastedData.rating}</p>
                </div>
                <div className = "content3">
                    <form onSubmit = {handleSubmit(onSubmit)}>
                        <div>
                            <h3>Name</h3>
                            {/* Create the input Name */}
                            <p>
                                <input type = "text" className = {`form-control ${errors.name && "invalid"}`} {...register("name", {
                                    required: "Name is Required"
                                    })}
                                    onKeyUp={() => {
                                        trigger("name");
                                    }}
                                />
                            </p>
                            {errors.name && (<small className="text-danger">{errors.name.message}</small>)}
                        </div>
                        <br/>
                        <div className="form-group">
                            <h3>Address</h3>
                            {/* Create the input Address */}
                            <p>
                                <input type = "text" className = {`form-control ${errors.name && "address"}`} {...register("address", {
                                    required: "Address is Required"
                                    })}
                                    onKeyUp={() => {
                                        trigger("address");
                                    }}
                                />
                                </p>
                            {errors.address && (<small className="text-danger">{errors.address.message}</small>)}
                        </div>
                        <br/>
                        <div className="form-group">
                            <h3>Phone</h3>
                            {/* Create the input Phone */}
                            <p>
                                <input type = "text" className = {`form-control ${errors.name && "phoneNumber"}`} {...register("phoneNumber", {
                                    required: "Phone Number is Required",
                                    pattern: {
                                        value: /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
                                        message: "Invalid Phone Number"
                                    }})}
                                    onKeyUp={() => {
                                        trigger("phoneNumber");
                                    }}
                                />
                            </p>
                            {errors.phoneNumber && (<small className="text-danger">{errors.phoneNumber.message}</small>)}
                        </div>
                        <br/>
                        <button className = "btn" >Submit</button>
                        <br/>
                    </form>
                </div>
            </section>
            
        </>
    )
}
