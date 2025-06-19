import React from "react";
import { FaArrowRight,FaTractor, FaLeaf,FaPagelines,FaTree, FaWhatsapp,FaInstagram,FaTwitter,FaYoutube} from "react-icons/fa";

import './Footer.css';

function FooTer() {
    //   const navigate = useNavigate();  
    return (
      <div className="fixed-page">
        <div className="container14">
      <div className="last1">
        <h2><span id="gic"><FaPagelines/></span>AgriPacK</h2>
       <div className="foot-box">
    <h3><span id="joarw"><FaArrowRight/></span>Join our newspaper</h3>
    <input type="email" placeholder="your email-id" id="joinput"  />
    <button id="joisub">submit</button>
</div>



        <div className="first">
          <p>Our brands:</p>
         {/* Delhi: 2nd. Floor, NCUI Campus, 3, Siri Institution Area, August Kranti Marg, Hauz Khas, New Delhi - 110 016 */}
         
         <div className="joadd"><p>5nd,street,Aiji Campus, <br />
        Institution Area, August <br /> Kranti Marg, Hauz Khas, <br />Punjab. </p>
         <strong></strong>
         
          <p >
            <strong>+1 8200 2845 6549</strong> 
          </p>
          <p>
            <strong>aiziSoftHr@gmail.com</strong> 
          </p>
          </div>

<p>Follow us</p>
<div className="jonicon">

<span id="wht">< FaWhatsapp/></span>
          <span id="inst">< FaInstagram/></span>
          <span id="twi">< FaTwitter/></span>
          <span id="you">< FaYoutube/></span>
         
</div>
        </div>
      </div>

      {/* ─────────── Right column ─────────── */}
      <div className="second">
        <div className="second1">
          {/* Useful Links */}
          <div className="second2">
            <h3>Quick Links</h3>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Environment</li>
              <li>Import</li>
              <li>Help</li>
              <li>Research</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          {/* Our Services */}
          <div className="second2">
            <h3>Farmland </h3>
            <ul>
               <li>Agri Politics</li>
                <li>Agri-Business</li>
                 <li>Forestry</li>
              <li>Rural Life</li>
              <li>Grass</li>
              <li>Dairy</li>
            </ul>
          </div>

          {/* Hic solutasetp */}
          <div className="second2">
            <h3>AGRIcreative</h3>
            <ul>
              <li>Contact Agriland</li>
              <li>About Agriland.ie</li>
              <li>Advertising</li>
              <li>Factory Prices</li>
                 <li>Latest News</li>
            </ul>
          </div>

          {/* Nobis illum */}
          <div className="second2">
            <h3>AGRIretailer</h3>
            <ul>
              <li>Featured</li>
              <li>Work With Us</li>
              <li>Newsletters</li>
              <li>Terms of use</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    {/* ─────────── Bottom bar ─────────── */}
    <div className="third">
      <div className="line" />
      <div className="third1">
        <p>
          © <strong>AgriPacK</strong> — All Rights Reserved
        </p>
        <span>
          Designed by <strong>Ashvanth</strong>
        </span>
      </div>
    </div>
    </div>
    );
};
export default FooTer;












  
  
  
  
  