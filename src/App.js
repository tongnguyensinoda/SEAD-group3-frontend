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
function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/signin" element={<SignIn />} />
                <Route path="/about" element={<AboutUsComponent />} />
                <Route path="/management" element={<Management></Management>} />
                <Route path="/" element={<HomeComponent />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
