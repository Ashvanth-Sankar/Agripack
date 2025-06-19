import React from "react";
import {useNavigate } from 'react-router-dom';
import './import.css';
const Import = () => {
     const navigate = useNavigate(); 
    return (
        <div className="import">
           <h2>sun/mars</h2>
           <h1>jupiter/earth</h1>
           <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate accusamus quaerat rem sequi. Architecto, minus quidem molestias cum quisquam officia.</p>
          
        <button onClick={() => navigate(-1)}>previous</button>
        </div>
    );
};
export default Import;