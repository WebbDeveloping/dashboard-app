import React, { useEffect, useState } from "react";
import './App.scss';
import axios from 'axios';
import Home from './pages/Home';

function App() {
  const [loading, setLoading] = React.useState(true);

// console.log(products, cart, users)
  return (
<div className="App">
  <div className="app-wrapper">
      <Home />
  </div>
</div>
  );
}

export default App;


{/* <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/invoices">Invoices</Link> |{" "}
        <Link to="/expenses">Expenses</Link>
      </nav>
      <Outlet />
    </div> */}