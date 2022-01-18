import React from "react";
import { Table, Button, Modal, Col, Row, Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import "./ManagementCRUD.css";
import { Item, LeftContent, RightContent, Wrapper, Text, ReportForm } from "./ManagementCRUD.style";
import Avatar from "../../avatar.png";
import styled from "styled-components";
import Pending from "../../pending.png";
import BlackPending from "../../black-pending.png";
import Checked from "../../checked.png";
// const ProgressStatus = ({ theme, progress }) => {
//     return (
//         <img
//             alt=""
//             src={
//                 theme === "light" && progress === false
//                     ? Pending
//                     : theme === "black" && progress === false
//                     ? BlackPending
//                     : progress === true
//                     ? Checked
//                     : Checked
//             }
//             style={{ width: "35px" }}
//         />
//     );
// };

const ManagementCRUD = ({
    users,
    deleteUser,
    editRow,
    currentUser,
    updatedUser,
    theme,
    currentPage,
    pageSize,
    container,
    menuName,
    setMenuName,
    addUser,
}) => {
    // const { items, deleteItem, editRow, currentItem, updateItem, theme, currentPage, pageSize } =
    //     props;
    // const [item, setItem] = React.useState();
    const [deleteId, setDeleteId] = useState();
    const [editItem, setEditItem] = useState();
    const [deleteModalShow, setdeleteModalShow] = useState(false);

    const [ItemModalShow, setItemModalShow] = useState(false);
    const [itemShow, setItemShow] = useState({});
    const handleDeleteUser = () => {
        setdeleteModalShow(false);
        deleteUser(deleteId);
    };
    let tableHead;
    console.log(users)
    let tableBody;
    if (menuName === "serviceTran") {
        tableHead = (
            <>
                <th>Service Transaction ID</th>
                <th>Customer</th>
                <th>Mechanic</th>
                <th>Address</th>
                <th>Phone</th>
                <th>Service Name</th>
                <th>Total Cost</th>
                <th>Start date</th>
                <th>Progress</th>
            </>
        );
        tableBody = (
            <>
                {users.map((user, index) => (
                    <tr key={index}>
                        <td
                            style={{ width: "10%" }}
                            onClick={() => {
                                // setItemModalShow(true);
                                // setItemShow(user);
                                editRow(user);
                            }}
                        >
                            <>{user.serviceTransId}</>
                        </td>
                        <td
                            style={{ width: "15%" }}
                            onClick={() => {
                                // setItemModalShow(true);
                                // setItemShow(user);
                                editRow(user);
                            }}
                        >
                            <>{user.customer}</>
                        </td>
                        <td
                            style={{ width: "10%" }}
                            onClick={() => {
                                // setItemModalShow(true);
                                // setItemShow(user);
                                editRow(user);
                            }}
                        >
                            <>{user.mechanic}</>
                        </td>
                        <td
                            style={{ width: "10%" }}
                            onClick={() => {
                                // setItemModalShow(true);
                                // setItemShow(user);
                                editRow(user);
                            }}
                        >
                            <>{user.address}</>
                        </td>
                        <td
                            style={{ width: "10%" }}
                            onClick={() => {
                                // setItemModalShow(true);
                                // setItemShow(user);
                                editRow(user);
                            }}
                        >
                            <>{user.phone}</>
                        </td>
                        <td
                            style={{ width: "10%" }}
                            onClick={() => {
                                // setItemModalShow(true);
                                // setItemShow(user);
                                editRow(user);
                            }}
                        >
                            <>{user.serviceName}</>
                        </td>
                        <td
                            style={{ width: "10%" }}
                            onClick={() => {
                                // setItemModalShow(true);
                                // setItemShow(user);
                                editRow(user);
                            }}
                        >
                            <>{user.totalCost}</>
                        </td>
                        <td
                            style={{ width: "30%" }}
                            onClick={() => {
                                // setItemModalShow(true);
                                // setItemShow(user);
                                editRow(user);
                            }}
                        >
                            <>{user.startDate}</>
                        </td>
                        <td style={{ width: "15%" }}>
                            <img
                                alt=""
                                src={
                                    theme === "light" && user.endDate === null
                                        ? Pending
                                        : theme === "dark" && user.endDate === null
                                        ? BlackPending
                                        : user.endDate !== null
                                        ? Checked
                                        : Pending
                                }
                                style={{ width: "35px" }}
                            />
                            {/* <ProgressStatus theme={theme} progress={progress}></ProgressStatus> */}
                            {/* <div className="btn-container btn">
                        <div
                            className="btn-edit center"
                            onClick={() => {
                                setEditModalShow(true);
                                editRow(user);
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
                                setDeleteId(user.id);
                            }}
                            style={{ color: theme === "light" ? "black" : "white" }}
                        >
                            Delete
                        </div>
                    </div> */}
                        </td>
                    </tr>
                ))}
            </>
        );
    } else if (menuName === "customer") {
        tableHead = (
            <>
                <th>ID</th>
                <th>Name</th>
                <th>Address</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Action</th>
            </>
        );
        tableBody = (
            <>
                {users.map((user, index) => (
                    <tr key={index}>
                        <td
                            style={{ width: "10%" }}
                            onClick={() => {
                                // setItemModalShow(true);
                                // setItemShow(user);
                                editRow(user);
                            }}
                        >
                            <>{user.id}</>
                        </td>
                        <td
                            style={{ width: "10%" }}
                            onClick={() => {
                                // setItemModalShow(true);
                                // setItemShow(user);
                                editRow(user);
                            }}
                        >
                            <>{user.name}</>
                        </td>
                        <td
                            style={{ width: "15%" }}
                            onClick={() => {
                                // setItemModalShow(true);
                                // setItemShow(user);
                                editRow(user);
                            }}
                        >
                            <>{user.address}</>
                        </td>
                        <td
                            style={{ width: "30%" }}
                            onClick={() => {
                                // setItemModalShow(true);
                                // setItemShow(user);
                                editRow(user);
                            }}
                        >
                            <>{user.email}</>
                        </td>
                        <td
                            style={{ width: "10%" }}
                            onClick={() => {
                                // setItemModalShow(true);
                                // setItemShow(user);
                                editRow(user);
                            }}
                        >
                            <>{user.phone}</>
                        </td>
                        <td>
                            {/* <ProgressStatus theme={theme} progress={progress}></ProgressStatus> */}
                            <div className="btn-container btn">
                                <div
                                    className="btn-delete center"
                                    onClick={() => {
                                        setdeleteModalShow(true);
                                        setDeleteId(user.id);
                                        
                                    }}
                                    style={{ color: theme === "light" ? "black" : "white" }}
                                >
                                    Delete
                                </div>
                            </div>
                        </td>
                    </tr>
                ))}
            </>
        );
    } else if (menuName === "mechanic") {
        tableHead = (
            <>
                <th>ID</th>
                <th>Name</th>
                <th>Address</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Type</th>
                <th>Job Count</th>
                <th>Action</th>
            </>
        );
        tableBody = (
            <>
                {users.map((user, index) => (
                    <tr key={index}>
                        <td
                            style={{ width: "10%" }}
                            onClick={() => {
                                // setItemModalShow(true);
                                // setItemShow(user);
                                editRow(user);
                            }}
                        >
                            <>{user.id}</>
                        </td>
                        <td
                            style={{ width: "10%" }}
                            onClick={() => {
                                // setItemModalShow(true);
                                // setItemShow(user);
                                editRow(user);
                            }}
                        >
                            <>{user.name}</>
                        </td>
                        <td
                            style={{ width: "15%" }}
                            onClick={() => {
                                // setItemModalShow(true);
                                // setItemShow(user);
                                editRow(user);
                            }}
                        >
                            <>{user.address}</>
                        </td>
                        <td
                            style={{ width: "30%" }}
                            onClick={() => {
                                // setItemModalShow(true);
                                // setItemShow(user);
                                editRow(user);
                            }}
                        >
                            <>{user.email}</>
                        </td>
                        <td
                            style={{ width: "10%" }}
                            onClick={() => {
                                // setItemModalShow(true);
                                // setItemShow(user);
                                editRow(user);
                            }}
                        >
                            <>{user.phone}</>
                        </td>
                        <td
                            style={{ width: "10%" }}
                            onClick={() => {
                                // setItemModalShow(true);
                                // setItemShow(user);
                                editRow(user);
                            }}
                        >
                            <>{user.type}</>
                        </td>
                        <td
                            style={{ width: "10%" }}
                            onClick={() => {
                                // setItemModalShow(true);
                                // setItemShow(user);
                                editRow(user);
                            }}
                        >
                            <>{user.jobCount}</>
                        </td>
                        <td>
                            {/* <ProgressStatus theme={theme} progress={progress}></ProgressStatus> */}
                            <div className="btn-container btn">
                                <div
                                    className="btn-delete center"
                                    onClick={() => {
                                        setdeleteModalShow(true);
                                        setDeleteId(user.id);
                                    }}
                                    style={{ color: theme === "light" ? "black" : "white" }}
                                >
                                    Delete
                                </div>
                            </div>
                        </td>
                    </tr>
                ))}
            </>
        );
    } else {
        tableHead = (
            <>
                <th>Service ID</th>
                <th>Name</th>
                <th>Cost</th>
                {/* <th>Rating</th> */}
                <th>Type</th>
                <th>Action</th>
            </>
        );
        tableBody = (
            <>
                {users.map((user, index) => (
                    <tr key={index}>
                        <td
                            style={{ width: "10%" }}
                            onClick={() => {
                                // setItemModalShow(true);
                                // setItemShow(user);
                                editRow(user);
                            }}
                        >
                            <>{user.serviceId}</>
                        </td>
                        <td
                            style={{ width: "30%" }}
                            onClick={() => {
                                // setItemModalShow(true);
                                // setItemShow(user);
                                editRow(user);
                            }}
                        >
                            <>{user.name}</>
                        </td>
                        <td
                            style={{ width: "15%" }}
                            onClick={() => {
                                // setItemModalShow(true);
                                // setItemShow(user);
                                editRow(user);
                            }}
                        >
                            <>{user.cost}</>
                        </td>
                        {/* <td
                            style={{ width: "10%" }}
                            onClick={() => {
                                // setItemModalShow(true);
                                // setItemShow(user);
                                editRow(user);
                            }}
                        >
                            <>{user.rating}</>
                        </td> */}
                        <td
                            style={{ width: "20%" }}
                            onClick={() => {
                                // setItemModalShow(true);
                                // setItemShow(user);
                                editRow(user);
                            }}
                        >
                            <>{user.type}</>
                        </td>
                        <td>
                            {/* <ProgressStatus theme={theme} progress={progress}></ProgressStatus> */}
                            <div className="btn-container btn">
                                <div
                                    className="btn-delete center"
                                    onClick={() => {
                                        setdeleteModalShow(true);
                                        setDeleteId(user.serviceId);
                                    }}
                                    style={{ color: theme === "light" ? "black" : "white" }}
                                >
                                    Delete
                                </div>
                            </div>
                        </td>
                    </tr>
                ))}
            </>
        );
    }
    return (
        <Table
            hover
            style={{ color: theme === "light" ? "black" : "white" }}
            variant={theme === "light" ? "black" : "dark"}
            className="ManagementCrud"
        >
            <thead>
                <tr>{tableHead}</tr>
            </thead>
            <tbody>
                {tableBody}
                <DeleteConfirmModal
                    show={deleteModalShow}
                    onHide={() => setdeleteModalShow(false)}
                    handleDeleteUser={handleDeleteUser}
                />
                <ItemDetailModalStyled
                    show={ItemModalShow}
                    onHide={() => setItemModalShow(false)}
                    currentUser={currentUser}
                    updatedUser={updatedUser}
                    theme={theme}
                    // setProgress={setProgress}
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
                <Button onClick={props.handleDeleteUser}>Yes</Button>
                <Button onClick={props.onHide}>No</Button>
            </Modal.Footer>
        </Modal>
    );
}

function ItemDetailModal(props) {
    const handleUpdate = () => {
        props.onHide();
        props.updatedUser(props.currentUser.id, { ...props.currentUser, progress: true });
    };
    return (
        <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
            <ReportForm
                className="report-form"
                backgroundColor={props.theme == "light" ? "white" : "#001529"}
                textColor={props.theme == "light" ? " #4014ba" : "#a387f1"}
                titleColor={props.theme == "light" ? " blackk" : "#f33d3d"}
                selectBackground={props.theme == "light" ? " white" : "#001529"}
                style={{ borderRadius: "20px" }}
            >
                <div className="header">
                    <img src={Avatar} className="user-img" />
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
                        <button class="btn2 draw-border" onClick={handleUpdate}>
                            {" "}
                            Confirm
                        </button>
                    </div>
                </div>
            </ReportForm>
        </Modal>
    );
}

const ItemDetailModalStyled = styled(ItemDetailModal)`
    .modal-content {
        border-radius: 24px;
    }
`;
export default ManagementCRUD;
