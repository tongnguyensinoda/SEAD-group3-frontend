import "./App.css";
// import "antd/dist/antd.css";
import "./index.css";
import { SignIn } from "./components/SignIn";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HeaderComponent from "./components/HeaderComponent";
import AboutUsComponent from "./components/AboutUsComponent";
import HomeComponent from "./components/HomeComponent";
import FooterComponent from "./components/FooterComponent";
import Management from "./components/Management";
import Service from './components/Service/Service';
import BookingService from "./components/BookingService/BookingService";
function App() {
    return (
        <BrowserRouter>
            <HeaderComponent />
            <Routes>
                <Route path="/signin" element={<SignIn />} />
                <Route path="/about" element={<AboutUsComponent />} />
                <Route path="/service" element={<Service />} />
                <Route path="/bookingService/:id" element={<BookingService />} />
                <Route path="/management" element={<Management></Management>} />
                <Route path="/" element={<HomeComponent />} />
            </Routes>

            <FooterComponent />
        </BrowserRouter>
    );
}

export default App;
