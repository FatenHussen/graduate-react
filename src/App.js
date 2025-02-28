import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './Pages/Login';
import Products from './Pages/Products';
import Orders from './Pages/Orders';
import Dashboard from './Pages/Dashboard';
import Inventory from './Pages/Inventory';
function App() {
  return (
    <Router>
    <Routes>
    <Route path="/" Component={Login}></Route>
    <Route path="/dashboard" Component={Dashboard}></Route>
      <Route path="/products" Component={Products}></Route>
      <Route path="/orders" Component={Orders}></Route>
      <Route path="/inventory" Component={Inventory}></Route>
    </Routes>
  </Router>
  );
}

export default App;
