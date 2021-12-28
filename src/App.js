import "./App.css";
// import "antd/dist/antd.css";
import "./index.css";
import { SignIn } from "./components/SignIn";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HeaderComponent from "./components/HeaderComponent";
import AboutUsComponent from "./components/About";
import HomeComponent from "./components/HomeComponent";
import FooterComponent from "./components/FooterComponent";
import Management from "./components/Management";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar2";
import MechanicForm from "./components/Mechanic";
import Service from "./components/Service/Service";
import BookingService from './components/BookingService/BookingService';


function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <div style={{ minHeight: "69vh" }}>
                <Routes>
                    <Route path="/signin" element={<SignIn />} />
                    <Route path="/about" element={<AboutUsComponent />} />
                    <Route path="/management" element={<Management></Management>} />
                    <Route path="/service" element={<Service />} />
                    <Route path="/bookingService/:id" element={<BookingService />} />
                    <Route path="/mechanicForm" element={<MechanicForm></MechanicForm>} />
                    <Route path="/" element={<HomeComponent />} />
                </Routes>
            </div>

            <FooterComponent />
        </BrowserRouter>
    );
}

export default App;
