

import './App.scss';
import SideBar from './components/SideBar';
import Home from './pages/Home';

function App() {
  return (
<div className="App">
  <SideBar />
  <Home />
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