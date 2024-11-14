import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Landing from "./Pages/Landing";
import Catagory from "./Pages/Catagory";
import Products from "./Pages/Products";
import Search from "./Pages/Search";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import Verification from "./Pages/Verification";
import Profile from "./Pages/Profile";
import ForgotPassword from "./Pages/ForgotPassword";

function App() {
  return (
    <Router>
    <Routes>
    <Route path="/" Component={Landing}></Route>
    <Route path="/catagory" Component={Catagory}></Route>
    <Route path="/products/:name" Component={Products}></Route>
    <Route path="/product/:id" Component={Product}></Route>
    <Route path="/cart" Component={Cart}></Route>
    <Route path="/search" Component={Search}></Route>
    <Route path="/login" Component={Login}></Route>
      <Route path="/signup" Component={Signup}></Route>
      <Route path="/verification" Component={Verification}></Route>
      <Route path="/forgot-password" Component={ForgotPassword}></Route>
    <Route path="/profile" Component={Profile}></Route>
    </Routes>
  </Router>
  );
}

export default App;
