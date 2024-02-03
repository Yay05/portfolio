import { Outlet, Link } from "react-router-dom";
import '../App.css';

const Route = () => {
  return (
    <>
      <nav>
        <ul>
        <label className="logo">FEBIN</label>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      

      <Outlet />
    </>
  )
};

export default Route;