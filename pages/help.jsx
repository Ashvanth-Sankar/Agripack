import React from "react";
import { useNavigate } from 'react-router-dom';

import './home.css';
const Help = () => {
      const navigate = useNavigate();  
    return (
        <section className="page">
        <div className="home">
           <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam quo, voluptate impedit, exercitationem omnis repellat dolore sint vero modi, ipsam voluptas perferendis hic libero error.</p>
        </div>
        <div className="box">
             {/* <button onClick={() => navigate('/about')}>submit</button> */}
              <button onClick={() => navigate(-1)}>previous</button>
        </div>
        </section>
    );
};
export default Help;