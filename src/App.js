import React, { useEffect, useState } from "react";
import './App.scss';
import axios from 'axios';
import Home from './pages/Home';
import Login from "./pages/Login";

function App() {
  const [loading, setLoading] = React.useState(true);
  return (
<div className="App">
  <div className="app-wrapper">
      <Home />
      {/* <Login /> */}
  </div>
</div>
  );
}

export default App;