import React, { useState, useEffect } from "react";
import { useParams} from 'react-router-dom'
import "./BookingService.css";
import SubNav from "../SubNav";
import {useForm} from "react-hook-form"
import Select from 'react-select';
import TextField from '@material-ui/core/TextField';

export default function BookingService() {
    const [pastedData, setPastedData] = useState([])
    const [mechanic, setMechanic] = useState([])
    const [selectedOption, setSelectedOption] = useState(null)
    const [checkState, setCheckState] = useState(0);
    const [defaultMechanic, setDefaultMechanic] = useState('');

    const selectionMechanic = []

    // Read the value by using the useParam function
    let {id} = useParams()

    const {register, handleSubmit, formState: { errors }, reset, trigger} = useForm();

    // Read the product information by serviceId
    useEffect(() => {
        fetch("http://localhost:8080/service/" + id,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
            })
            .then(response => response.json())
            .then(data => setPastedData(data));
    }, []);

    if ((pastedData.type != null) && (checkState == 0)){
        setCheckState(1);
        fetch("http://localhost:8080/auth/mechanic/getall/type?request=" + pastedData.type,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
            })
            .then(response => response.json())
            .then(data => setMechanic(data))
    }

    // Submit the input product
    const onSubmit = (data) => {
        fetch("http://localhost:8080/servicetran", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 
                customer: data.name,
                mechanic: selectedOption.label,
                mechanicId: selectedOption.value,
                address: data.address,
                phone: data.phoneNumber,
                serviceName: pastedData.name,
                totalCost: pastedData.cost
             })
        }).then(res => {alert("BOOKING SUCCESSFULLY!!!");})
        fetch("http://localhost:8080/auth/mechanic/" + selectedOption.value + "?request=increase", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        reset();
    }

    // Create the selection options for mechanic
    for (let i = 0; i < mechanic.length; i++){
        selectionMechanic.push({value: mechanic[i].id, label: mechanic[i].name})
    }

    const handleChange = obj => {
        setSelectedOption(obj)
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
                                <input type = "text" className = {`form-control ${errors.address && "address"}`} {...register("address", {
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
                                <input type = "text" className = {`form-control ${errors.phoneNumber && "phoneNumber"}`} {...register("phoneNumber", {
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
                        {/* <div className="form-group">
                            <TextField></TextField>
                        </div>  */}
                        <br/>
                        <div className="form-group">
                            <h3>Mechanic</h3>
                            {/* Create the input Phone */}
                            <Select
                                value = {selectedOption}    
                                onChange={handleChange}
                                options = {selectionMechanic}
                                defaultValue={selectionMechanic[0]}
                            />
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
