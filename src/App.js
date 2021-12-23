import "./App.css";
import { SignIn } from "./components/SignIn";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HeaderComponent from "./components/HeaderComponent";
import AboutUsComponent from "./components/AboutUsComponent";
import HomeComponent from "./components/HomeComponent";
import FooterComponent from "./components/FooterComponent";
import Service from "./components/Service/Service";

function App() {
    return (
        
      <BrowserRouter>
      <HeaderComponent/>
        <Routes>
        <Route path="/signin" element={<SignIn />}/>
        <Route path="/about" element={<AboutUsComponent />}/>
        <Route path="/service" element={<Service />}/>
        <Route path="/" element={<HomeComponent />}/>

        </Routes>

      <FooterComponent/>
      </BrowserRouter>
    );
  }
  
export default App;
