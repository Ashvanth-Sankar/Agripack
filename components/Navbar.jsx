import React from "react";
import { Link } from 'react-router-dom';
import { FaArrowRight,FaTractor, FaLeaf,FaPagelines,FaTree} from "react-icons/fa";
import './Navbar.css';

function Navbar() {
    //   const navigate = useNavigate();  
    return (
        <div className="nav-bar">
            
        <div className="nav-box">
            <h1><span id="gic"><FaPagelines/></span> AgriPacK</h1>
            <div className="list-box">
        <li ><Link to="/">Home</Link></li>
        <li ><Link to="/about">About</Link></li>
        <li ><Link to="/environment"> Environment</Link></li>
       {/* <li ><Link to="/import"> Import</Link></li>
        <li><Link to="/help">Help</Link></li>  */}
        </div>
        </div>
        </div>
    );
};
export default Navbar;

