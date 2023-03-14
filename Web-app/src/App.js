import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Dashboard from "./Pages/admin/Dashboard";
import Users from "./Pages/admin/Users";
import ErrorPage from "./components/ErrorPage";
import Products from "./Pages/Products";
import Blog from "./Pages/Blog";
import OurStory from "./Pages/OurStory";
import Orders from "./Pages/admin/Orders";
        

function App() {
  
  return (
    <>
      <Routes>      
        <Route path="/" element={<Home />} />
        <Route className="App" path="/dashboard" element={<Dashboard />} />
        <Route path="/users" element={<Users />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/ourStory" element={<OurStory/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />   
        <Route path="*" element={<ErrorPage />} />   
      </Routes>
      
    </>
  );
}

export default App;
