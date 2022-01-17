import "./App.css";
// import "antd/dist/antd.css";
import "./index.css";
import { SignIn } from "./components/SignIn";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import HeaderComponent from "./components/HeaderComponent";
import AboutUsComponent from "./components/About";
import HomeComponent from "./components/HomeComponent";
import FooterComponent from "./components/FooterComponent";
import Management from "./components/Management";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar2";
import MechanicForm from "./components/Mechanic";
import CategoryService from "./components/CategoryService/CategoryService";
import Service from "./components/Service/Service";
import BookingService from "./components/BookingService/BookingService";
import Profile from "./components/Profile";

function App() {
    const [information, setInformation] = useState(
        JSON.parse(localStorage.getItem("information"))
            ? JSON.parse(localStorage.getItem("information"))
            : ""
    );
    return (
        <BrowserRouter>
            <Navbar information={information} />
            <div style={{ minHeight: "69vh" }}>
                <Routes>
                    <Route path="/signin" element={<SignIn />} />
                    <Route path="/about" element={<AboutUsComponent />} />
                    <Route path="/management" element={<Management></Management>} />
                    <Route path="/categoryService" element={<CategoryService />} />
                    <Route path="/service/:id" element={<Service />} />
                    <Route path="/bookingService/:id" element={<BookingService />} />
                    <Route
                        path="/mechanicForm"
                        element={<MechanicForm information={information}></MechanicForm>}
                    />
                    <Route
                        path="/profile"
                        element={<Profile information={information}></Profile>}
                    />

                    <Route path="/" element={<HomeComponent />} />
                </Routes>
            </div>
            <FooterComponent />
        </BrowserRouter>
    );
}

export default App;
