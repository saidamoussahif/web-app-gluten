import { Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import OurStory from "./Pages/OurStory";
import Blog from "./Pages/Blog";
import Login from "./Pages/Login";
import ErrorPage from "../src/components/ErrorPage";
import Register from "./Pages/Register";
import Dashboard from "./Pages/admin/Dashboard";
import Orders from "./Pages/admin/Orders";
import Users from "./Pages/admin/Users";
import "./App.css";
import CartProduct from "./Pages/CartProduct";
import FilterProduct from "./Pages/FilterProduct";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} exact />
        <Route path="/about" element={<OurStory />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/cart" element={<CartProduct/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/users" element={<Users />} />
        <Route path="/category/:category" element={<FilterProduct/>} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;

