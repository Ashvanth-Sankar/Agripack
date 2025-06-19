import React from "react";
import {useNavigate } from 'react-router-dom';
import { FaArrowRight,FaTractor, FaLeaf,FaPagelines,FaTree,FaMapMarkerAlt,FaPhone,FaEnvelope } from "react-icons/fa";
import Aback2 from '../assets/abou/aback2.jpg';
import Seed4 from '../assets/abou/seed4.jpg';
import Milkp from '../assets/abou/milkp.jpg';
import Cowd2 from '../assets/abou/cowd2.jpg';
import Research from '../assets/abou/research.jpg';
import Plant2 from '../assets/abou/plant2.jpg';
import Farmer from '../assets/abou/farmer.jpg';
import Contmen from '../assets/abou/contmen.jpg';
import Contmen2 from '../assets/abou/contmen2.jpg';
import Contmen3 from '../assets/abou/contmen3.jpg';

import './about.css';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';


const About = () => {
     const navigate = useNavigate(); 
      const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Wait a tick so the page finishes rendering
      setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 0);
    }
  }, [hash]);



    return (
        <section className="about">
        <div className="about-page">
            <div className="about-img">
                <div className="about-text">
                <p id="apar"> Farmers, agri-entrepreneurs, and enthusiasts are turning to the web for  <br />market updates and to build a virtual barn of shared knowledge. it's <br />about sowing the seeds of connection in the vast online fields of agriculture.</p>
                <img src={Aback2} alt="ab" id="Aba" />
                </div>
            </div>
            </div>
            <section className="product">
                <div className="about-product">
                 <h2 id="pdt">Products</h2>
                 <div className="product-line"></div>
                        <div className="about-center">
                     <div className="about-list">
                        <img src={Seed4} alt="se"  id="Sed"/>
                    </div>
                     <div className="about-list-text">
                          <h2 id="briefh2">Farm Products</h2>
                    <p id="lispar1">The Seed Collection is an Australian owned and operated business, based in the foothills of the Dandenong Ranges  in Ferntree Gully, Victoria.  
                   It's our mission to make more seeds more accessible to more people; we believe everyone should have access to quality seeds and a diversity of varieties at a fair price.</p>
                    <button id="Abtn" onClick={() => navigate("/form")}>Shop</button>
                    </div>  

                     
                     <div className="about-list-text">
                        <h2 id="briefh2">Dairy Products</h2> 
                    <p id="lispar1">The natural benefits of cow-derived products is to promote health, wellness, and sustainability.  The cow products is carefully crafted to deliver the highest quality and purity, ensuring that  customers can enjoy the numerous benefits that these products have to offer.</p>
                      <button id="Abtn" onClick={() => navigate("/dairy")}>Shop</button>
                    </div>
                    <div className="about-list">
                        <img src={Milkp} alt="se"  id="Sed"/>
                    </div>



                     <div className="about-list">
                        <img src={Cowd2} alt="se"  id="Sed"/>
                    </div>
                     <div className="about-list-text">
                        <h2 id="briefh2">Doctor</h2>  
                    <p id="lispar1">The mission is to provide expert veterinary care that prioritizes the health, well-being, and happiness of animals.  We strive to build strong relationships with pet owners, educating and supporting them in the care of their beloved companions.</p>
                        <button id="Abtn" onClick={() => navigate("/doctor")}>Visit</button>
                    </div> 

                    
                     
                     <div className="about-list-text">
                        <h2 id="briefh2">Research center</h2>  
                    <p id="lispar1">Our plant research endeavors focus on exploring the intricacies of plant growth, development, and interactions the environment. 
                    The mission is to conduct innovative and impactful plant research that addresses pressing global challenges, such as food security, climate change, and sustainability.</p>
                    <button id="Abtn" onClick={() => navigate("/search")}>Visit</button>
                    </div>
                    <div className="about-list">
                        <img src={Research} alt="se"  id="Sed"/>
                    </div>

                     <div className="about-list">
                        <img src={Plant2} alt="se"  id="Sed"/>
                    </div>
                     <div className="about-list-text">
                        <h2 id="briefh2">Plant Selling</h2>  
                    <p id="lispar1">I am passionate about bringing the beauty and benefits of plants to home or garden.  The online plant store offers a wide variety of high-quality plants, expertly selected to thrive in various environments.</p>
                    <button id="Abtn"  onClick={() => navigate("/environment")}>Visit</button>
                    </div>
                    
                 </div> 

                    
                </div>
            </section>

            <section className="value">
                <div className="our-value">
                    <p id="ourpara">Our</p>
                    <h2 id="valuepar">Value</h2>
                    <div className="valu-line"></div>
                    <div className="value-text-grib">
                    <div className="value-grib1">
                    <p className="val-paragraph">
                  <FaLeaf className="leaf-icon-value" />
                <strong>Integrity:</strong>Integrity is our guiding principle, fostering honesty in our global agricultural supply chain. Partner trust drives our pursuit of an advanced, uncompromisingly honest system.
                </p>
                  <p className="val-paragraph">
                  <FaLeaf className="leaf-icon-value" />
                <strong>Trust:</strong> Agrify values trust above all else, ensuring transparency with partners and consumers through open communication and providing essential knowledge at every step.
                </p>
                           
                    </div>
                    <div className="value-grib1">
                        <p className="val-paragraph">
                  <FaLeaf className="leaf-icon-value" />
                <strong>Freshness:</strong>Through extensive production research and constant quality control, we deliver 100% satisfaction, ensuring partners success and joyful consumer experiences with our fresh and Exotic Fruits.
                </p>
                    
                        <p className="val-paragraph">
                  <FaLeaf className="leaf-icon-value" />
                <strong>Innovation: </strong>Innovation fuels our passion for tech and commitment to quality, fostering a thriving community of farmers and happy consumers of fresh products.
                </p>
                    </div>
                    </div>
                </div>
            </section>
              

              <section className="farmer">
                <div className="farmer-bg">
                    <div className="farmer-grib">
                        <div className="farmer-text">
                            <h1 id="frehh1">Freshness that  <br />connects us All</h1>
                            <p id="frepar">Bringing premium imported fruits to India, one box at a time</p>
                            <button id="farmerbtn">SOME FARMER WORKER ON</button>
                        </div>
                        <div className="farmer-image">
                            <img src={Farmer} alt="fam" id="farmer" />
                        </div>
                    </div>
                </div>
              </section>
             

             <section className="contact">
                <div className="contact-details-bg">
                    <h2 id="conacth2">Contact Us</h2>
                    <div className="contact-line"></div>
                    <div className="contact-details-grib">

                     <div className="contect-men-img">
                      <img src={Contmen} alt="cmen" id="conmen" />
                     </div>
                    <div className="contact-text">
                        <FaMapMarkerAlt className="phonefa"/>
                        <h2 id="addresh2">Address</h2>
                        <p id="addrespar1">k 66, Krushi wholesale market, KK 1067, Janta Market Rd, APMC Fruits and Vegetable Market, Sector 19, Turbhe, Navi Delhi, Maharashtra 400703.</p>
                    </div>
                     <div className="contect-men-img">
                         <img src={Contmen2} alt="cmen" id="conmen" />
                     </div>




                      
                    <div className="contact-text">
                        <FaPhone className="phonefa"/>
                        <h2 id="addresh2">Call Us</h2>
                        <p id="addrespar2">+91 9244621556</p>
                          <p id="addrespar2">+91 8556244109</p>
                    </div>
                    <div className="contect-men-img">
                      <img src={Contmen3} alt="cmen" id="conmen" />
                     </div>
                       <div className="contact-text">
                        <FaEnvelope className="phonefa" />
                        <h2 id="addresh2">Email</h2>
                        <p id="addrespar3"><strong>Domestic:</strong> hello@agripackfresh.com</p>
                        <p id="addrespar3"><strong>International:</strong>global@agripackfresh.com</p>
                    </div>
                     
                    </div>
                </div>
             </section>
       
      
        </section>
    );
};
export default About;


