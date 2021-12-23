import React from "react";
import { Table, Button, Modal, Col, Row, Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import "./ManagementCRUD.css";
import styled from "styled-components";
import { Item, LeftContent, RightContent, Wrapper, Text, ReportForm } from "./ManagementCRUD.style";
import Avatar from "../../avatar.png";

const ManagementCRUD = (props) => {
    const { items, deleteItem, editRow, currentItem, updateItem, theme, currentPage, pageSize } =
        props;
    // const [item, setItem] = React.useState();
    const [deleteId, setDeleteId] = useState();
    const [editItem, setEditItem] = useState();
    const [deleteModalShow, setdeleteModalShow] = React.useState(false);
    const [editModalShow, setEditModalShow] = React.useState(false);
    const [ItemModalShow, setItemModalShow] = React.useState(false);
    const [itemShow, setItemShow] = React.useState({});
    const handleDeleteItem = () => {
        setdeleteModalShow(false);
        deleteItem(deleteId);
    };
    let itemsArray = [];
    for (let i = (currentPage - 1) * pageSize; i < (currentPage - 1) * pageSize + pageSize; i++) {
        if (items[i] == null) {
            break;
        }
        itemsArray.push(items[i]);
    }
    return (
        <Table
            hover
            style={{ color: theme === "light" ? "black" : "white" }}
            variant={theme === "light" ? "black" : "dark"}
        >
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Price ($)</th>
                    <th>brand</th>
                    <th>Amount</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {itemsArray.map((item, index) => (
                    <tr key={index}>
                        <td
                            style={{ width: "10%" }}
                            onClick={() => {
                                setItemModalShow(true);
                                setItemShow(item);
                            }}
                        >
                            <>{item.id}</>
                        </td>
                        <td
                            style={{ width: "15%" }}
                            onClick={() => {
                                setItemModalShow(true);
                                setItemShow(item);
                            }}
                        >
                            <>{item.name}</>
                        </td>
                        <td
                            style={{ width: "30%" }}
                            onClick={() => {
                                setItemModalShow(true);
                                setItemShow(item);
                            }}
                        >
                            <>{item.description}</>
                        </td>
                        <td
                            style={{ width: "10%" }}
                            onClick={() => {
                                setItemModalShow(true);
                                setItemShow(item);
                            }}
                        >
                            <>{item.price}</>
                        </td>
                        <td
                            style={{ width: "10%" }}
                            onClick={() => {
                                setItemModalShow(true);
                                setItemShow(item);
                            }}
                        >
                            <>{item.brand}</>
                        </td>
                        <td
                            style={{ width: "10%" }}
                            onClick={() => {
                                setItemModalShow(true);
                                setItemShow(item);
                            }}
                        >
                            <>{item.amount}</>
                        </td>
                        <td style={{ width: "15%" }}>
                            <div className="btn-container btn">
                                <div
                                    className="btn-edit center"
                                    onClick={() => {
                                        setEditModalShow(true);
                                        editRow(item);
                                        setEditItem(item);
                                    }}
                                    style={{ color: theme === "light" ? "black" : "white" }}
                                >
                                    Edit
                                </div>
                            </div>
                            <div className="btn-container btn">
                                <div
                                    className="btn-delete center"
                                    onClick={() => {
                                        setdeleteModalShow(true);
                                        setDeleteId(item.id);
                                    }}
                                    style={{ color: theme === "light" ? "black" : "white" }}
                                >
                                    Delete
                                </div>
                            </div>
                        </td>
                    </tr>
                ))}

                <EditModal
                    show={editModalShow}
                    onHide={() => setEditModalShow(false)}
                    item={editItem}
                    // handleInputChange={handleInputChange}
                    // setItem={setItem}
                    currentItem={currentItem}
                    updateItem={updateItem}
                />
                <DeleteConfirmModal
                    show={deleteModalShow}
                    onHide={() => setdeleteModalShow(false)}
                    handleDeleteItem={handleDeleteItem}
                />
                <ItemDetailModal
                    show={ItemModalShow}
                    onHide={() => setItemModalShow(false)}
                    item={itemShow}
                    theme={theme}
                />
            </tbody>
        </Table>
    );
};

function DeleteConfirmModal(props) {
    return (
        <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    Are you sure to delete this item?
                </Modal.Title>
            </Modal.Header>
            <Modal.Footer>
                <Button onClick={props.handleDeleteItem}>Yes</Button>
                <Button onClick={props.onHide}>No</Button>
            </Modal.Footer>
        </Modal>
    );
}

function EditModal(props) {
    const [item, setItem] = useState(props.currentItem);

    useEffect(() => {
        setItem(props.currentItem);
    }, [props]);
    // You can tell React to skip applying an effect if certain values haven’t changed between re-renders. [ props ]
    const handleUpdate = () => {
        props.onHide();
        props.updateItem(item.id, item);
    };
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setItem({ ...item, [name]: value });
    };

    return (
        <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">Modal heading</Modal.Title>
            </Modal.Header>
            <Form>
                <Modal.Body>
                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                        <Form.Label column sm={2}>
                            Name
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control
                                type=""
                                placeholder=""
                                name="name"
                                value={item.name}
                                onChange={handleInputChange}
                            />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                        <Form.Label column sm={2}>
                            Description
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control
                                type=""
                                placeholder=""
                                name="description"
                                value={item.description}
                                onChange={handleInputChange}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                        <Form.Label column sm={2}>
                            Price
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control
                                type=""
                                placeholder=""
                                value={item.price}
                                name="price"
                                onChange={handleInputChange}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                        <Form.Label column sm={2}>
                            Brand
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control
                                type=""
                                placeholder=""
                                name="brand"
                                value={item.brand}
                                onChange={handleInputChange}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                        <Form.Label column sm={2}>
                            Amount
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control
                                type=""
                                placeholder=""
                                name="amount"
                                value={item.amount}
                                onChange={handleInputChange}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                        <Form.Label column sm={2}>
                            Image Url
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control
                                type=""
                                placeholder=""
                                name="imgUrl"
                                value={item.imgUrl}
                                onChange={handleInputChange}
                            />
                        </Col>
                    </Form.Group>
                </Modal.Body>

                <Modal.Footer>
                    <Button onClick={handleUpdate}>Update</Button>

                    <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Form>
        </Modal>
    );
}
function ItemDetailModal(props) {
    return (
        <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
            <ReportForm
                className="report-form"
                backgroundColor={props.theme == "light" ? "white" : "#001529"}
                textColor={props.theme == "light" ? " #4014ba" : "#a387f1"}
                titleColor={props.theme == "light" ? " blackk" : "#f33d3d"}
                selectBackground={props.theme == "light" ? " white" : "#001529"}
            >
                <div className="header">
                    <img src={Avatar} />
                    <h4>Mr. Tran Vu Hoang Viet</h4>
                    <h6>Software engineering</h6>
                </div>
                <div className="body">
                    <div className="title">
                        <div>User Report</div>
                    </div>
                    <div className="content">
                        <div className="contentTitle">Name</div>
                        <div className="detail">Viet</div>
                    </div>
                    <div className="content">
                        <div className="contentTitle">Address</div>
                        <div className="detail">299 Hung Vuong</div>
                    </div>
                    <div className="content">
                        <div className="contentTitle">Phone</div>
                        <div className="detail">0988715774</div>
                    </div>
                    <div className="content">
                        <div className="contentTitle">Report content</div>
                        <div className="detail">dsJHjsandkjasdjhasodjaskdjsajdsajdjfhiaohfoh</div>
                    </div>
                    <div className="content">
                        {" "}
                        <select name="userType" id="userType">
                            <option value="" disabled selected>
                                Categorical
                            </option>
                            <option value="Shop/Mechanic">Shop/Mechanic</option>
                            <option value="User">User</option>
                        </select>
                    </div>
                    <div className="content">
                        <select name="userType" id="userType">
                            <option value="" disabled selected>
                                Assign Mechanic
                            </option>
                            <option value="Shop/Mechanic">Shop/Mechanic</option>
                            <option value="User">User</option>
                        </select>
                    </div>
                    <div className="confirm-button">
                        <button class="btn2 draw-border"> Confirm</button>
                    </div>
                </div>
            </ReportForm>
        </Modal>
    );
}
export default ManagementCRUD;
