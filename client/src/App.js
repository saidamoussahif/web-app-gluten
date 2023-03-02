import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Dashboard from "./Pages/admin/Dashboard";
import Users from "./Pages/admin/Users";
import ErrorPage from "./components/ErrorPage";
import Products from "./Pages/Products";
// import Hero from "./components/Hero";
import Aos from "aos";
import NavBar from "./components/Client/NavBar";
        

function App() {
  Aos.init({
    duration: 1800,
    offset: 0,
  })
  return (
    <>
      <Routes>      
        <Route path="/" element={<NavBar />} />
        <Route className="App" path="/dashboard" element={<Dashboard />} />
        <Route path="/users" element={<Users />} />
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />   
        <Route path="*" element={<ErrorPage />} />   
      </Routes>
      
    </>
  );
}

export default App;
