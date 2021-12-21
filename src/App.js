import "./App.css";
import { SignIn } from "./components/SignIn";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HeaderComponent from "./components/HeaderComponent";
import AboutUsComponent from "./components/AboutUsComponent";

function App() {
    return (
        
      <BrowserRouter>
      <HeaderComponent/>
        <Routes>
        <Route path="/signin" element={<SignIn />}/>
        <Route path="/about" element={<AboutUsComponent />}/>
        </Routes>
      </BrowserRouter>
    );
  }
  
export default App;
